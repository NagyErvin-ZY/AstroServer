//------------------START OF SERVICECODE------------------//
const app = require('express')();
const path = require('path');
const fs = require('fs');
const express = require('express');
const https = require('https');
const nodemailer = require('nodemailer');
const knex = require('knex');
const bcrypt = require('bcrypt');
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80);

const database = knex({
client: 'pg',
connection: {
    host : '127.0.0.1',
    user: 'postgres',
    password: 'admin',
    database: 'angyalvonal'
}

});
const transporter = nodemailer.createTransport({
    pool: true,
    host: "cpanel8.rackforest.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: "admin@angyalvonal.hu",
      pass: "Brendon2005"
    }
  });
  const bp = require('body-parser');
const cors = require('cors');

const server = https.createServer({
    key: fs.readFileSync(__dirname + '/ssl/server.key'),
    cert: fs.readFileSync(__dirname + '/ssl/server.cert')
},app).listen(443);
app.use(bp()); 
app.use(cors());
const io = require('socket.io').listen(server);
const multer = require('multer');
var adminConnected = '';
var identifier = '';
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
      date = Date.now();
      identifier = date + path.extname(file.originalname);
    cb(null, date + path.extname(file.originalname)) //Appending extension
  }
})
const upload = multer({ storage: storage });
//------------------END OF SERVICECODE------------------//
//////////////////////////////////////////////////////
//------------------START OF USE------------------//
app.use('/images',express.static(__dirname + '/uploads'));
app.use('/public', express.static(path.join(__dirname, "/public")));
//------------------END OF USE------------------//
//////////////////////////////////////////////////////
//------------------START OF CONSTANTS------------------//
const modifyhash = "9917d774b0857f868ebf9c81dea3e43c4d337529fe1d8d3a73362a5d869dc42b";
var adminpass = '';
var adminid = 0;
var activeConnections = 0;
var allConnections= 0;
database('login')
.where({ admin: true })
.then(function(rows) { adminpass = rows[0].hash; adminid = rows[0].code})
//------------------END OF CONSTANTS------------------//
//////////////////////////////////////////////////////
//------------------START OF METHODS------------------//
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 const addMessage = (userCode,userTitle,userMessage) => {
     database('messages')
     .insert({
         code: userCode,
         title: userTitle,
         message: userMessage
     }).then(resp => console.log(resp))
 }
 const removeMessagges = (userCode) =>{
     database('messages')
     .where({
         code:userCode
     }).del().then()
 }
const getMinutes = async (id) =>{
    var minutes = 0;
   
    await database('entries').where(
        {code : id}
    )
    .orderBy('time','asc')
    .then(response => {
        for (let index = 1; index < response.length; index++) {

            const previousElement = response[index-1];
            const currentElement = response[index];
            if (previousElement.status == 2 && currentElement.status != 2) {
                let ms = (currentElement.time- previousElement.time) / 60000;
                minutes += Math.ceil(ms);
            }
            
        }
        
    }) 
    return minutes;
}
const adminow = async (socketid) =>{
    let idArrays = [];
            await database('users')
            .select('*')
            .returning('code')
            .then( resp  => idArrays =  resp.map((user,i)=>{ return user.code })    );
            
            
            let minutesArray = await getMinutesArrayed(idArrays);
            
            database('users').select('*').then(response => io.to(socketid).emit('adminow',response.map((user,i)=>{
                
                user.minutes = minutesArray[idArrays.indexOf(user.code)];
                if(user.code != adminid){
                    user.admin = false;
                }
                else{
                    user.admin = true;
                }
                return user;
            })))
}
const emitEvent = async() =>{
   
    var reviewsLocal = [];
    var usersLocal = [];
    const send = () =>{
        let finial = usersLocal.map((user,i)=>{
            let reviews = reviewsLocal.map((review,i)=>{
                console.log(review)
                if(review.code == user.code){
                    return review
                }
            }).filter(function (el) {
                return el != null;
              });
              
            user.reviews = reviews;
            return user
        })
        io.emit('event',finial)
    }

    await database
    .table('users')
    .orderBy('code', 'desc')
    .then(users =>   database
                    .table('reviews')
                    .orderBy('code', 'desc')
                    .then( reviews  =>  reviewsLocal = reviews,usersLocal = users
                    ))
                    send()
}
//------------------END OF METHODS------------------//
//////////////////////////////////////////////////////
//------------------START OF ROUTES------------------//
app.post('/rootacces',function(req,res){
    if (req.body.password != null) {
        bcrypt.compare(req.body.password,adminpass,function(err, result){
            if (result) {
                console.log(">>\tRoot acces granted\t<<")
                    
                    switch (req.body.function) {
                        case 'resetpass':

                            break;
                        case 'forcestatus':
                            break;
                        case 'stats':
                            res.send(`Angyalvonal website\tAstroweb mainframe statistics\n>>Date>>${Date.now()}<<\nActive:${activeConnections}\nAll conenctions existed:${allConnections}`);
                            break;
                        default:
                            res.send("Avalible functions for root:\n-resetpass\n-forcestatus\n-stats");
                            break;
                    }
                }
                else{
                    res.send("Bad root");
                }
        })
    }else{
        res.send("Bad root");
    }
        
    
})
app.post('/message',async function(req,res){
    if(adminConnected != ''){
        bcrypt.compare(req.body.adminpass,adminpass,(err,result)=>{
            if(result){
                 addMessage(parseInt(req.body.code),req.body.title,req.body.message);
                io.to(req.body.socketid).emit('modifyanswer',{
                    status : 0,
                    message : `A(z) ${req.body.code} kódú felhasználónak az üzenet sikeresen el lett küldve`
                })
            }
        })
        }
        res.sendStatus(200);
})
 app.post('/upload',  upload.single('avatar'), (req, res) => {
    console.log(req.body)
    const password = makeid(11);
    const hash = bcrypt.hashSync(password,10);
    database.transaction(trx =>{
        trx.insert({
            code: parseInt(req.body.code),
            hash: hash,
            admin: false
        }).into('login')
        .returning('code')
        .then(returningCode => {
            return trx('users')
            .returning('*')
            .insert({
                bank: req.body.bank,
                cost: 0,
                bank: req.body.bank,
                desciptrion: req.body.desciptrion,
                name: req.body.name,
                quote: req.body.quote,
                code: parseInt(returningCode),
                status: 0,
                avatar: 'https://192.168.1.69:8080/images/' + identifier
           }).then(res.sendStatus(200)).catch(e => console.log("ERROR" + e));
        }).then(trx.commit).then(
            emitEvent()
           ).then(
            database('users').select('*').then(response => io.to(req.body.sockedid).emit('adminow',response.map((user,i)=>{
                user.minutes = 0;
                return user;
            })))
           )
        .catch(trx.rollback)
    }).then(
        io.to(req.body.socketid).emit('modifyanswer',{
            status : 0,
            message : `A(z) ${req.body.code} kódú felhasználó sikeresen létre lett hozva és a jelszó hozzá \t\t>> ${password}`
           })
    )
    .catch(e => {
        if(e){
        io.to(req.body.socketid).emit('modifyanswer',{
            status : 1,
            message : `A(z) ${req.body.code} kódú felhasználó már létezik`
           })
    }

}).then(addMessage(req.body.code,"Üdvözlünk az Angyalvonalon!","Ha bármilyen kérdésed van fordulj az adminisztrátorhoz"));
    
    


    
});
app.post('/loginverify', async function(req, res){
   let minute = 0;
   await getMinutes(req.body.userid)
   .then(response => {
        minute = response
   }).catch(console.log("No such user: " + req.body.userid))
    if(req.body.socketid != null){
       database('login').where({
           code : req.body.userid
       })
       .then(response => {
           bcrypt.compare(req.body.password,response[0].hash,(err,result)=>{
               if(result){
                    if(response[0].admin == req.body.admin){
                        database('users').where({
                            code : req.body.userid
                        }).then(responseUser => {
                            database('messages')
                            .where({
                                code : req.body.userid
                            }).then(responseMessages=>{
                                io.to(req.body.socketid).emit('logincheck', {
                                    loggedIn : true ,
                                    name : responseUser[0].name,
                                    status: responseUser[0].status,
                                    minutes : minute,
                                    messages : responseMessages.reverse(),
                                    hash: modifyhash});
                                 if(response[0].admin){
                                     console.log("ADMIN JOINED");
                                     adminConnected = req.body.socketid
                                 }
                            })
                        })
                    }
               }
               else{
                io.to(req.body.socketid).emit('logincheck', {
                    loggedIn : false });
                res.sendStatus(200);
               }
           })
       }).catch(err =>{
        io.to(req.body.socketid).emit('logincheck', {
            loggedIn : false });
        res.sendStatus(200);
    })
    
    }else
    {
        io.to(req.body.socketid).emit('logincheck', {
            loggedIn : false });
        res.sendStatus(200);
    }

});

const getMinutesArrayed = async (idArray) =>{
    let RetArray = []
    for (let index = 0; index < idArray.length; index++) {
        const element = idArray[index];
        await getMinutes(element)
        .then(response=>{RetArray.push(response)})
    }
    return RetArray
}
app.post('/adminow',async function(req,res){
    
    const pss = "Avatatjana";
    console.log("adminow");
    bcrypt.compare(req.body.adminpass,adminpass,async(err,result)=>{
        if(result){
            adminow(req.body.sockedid);
            
        }else{
            console.log("Acces Denied to unatohrized admin");
        }
    })
    
    res.sendStatus(200);
})

app.post('/modify',function(req,res){
    if(req.body.sockedid != 0 ){
       var socketid = req.body.sockedid
        console.log("DeleteIniateted: " + req.body.toDeleteID + "\tFrom socket: " + req.body.socketid)
        bcrypt.compare(req.body.adminpass,adminpass,(err,result)=>{
            if(result){
                database.table('reviews').where({code:req.body.toDeleteID}).del().then(resp => console.log(resp))
                
               database('login').where({
                   code : req.body.toDeleteID
               }).then(response => 
                    {   
                        if(!response[0].admin){
                        database('login').where({
                            code : req.body.toDeleteID
                        }).del().catch(resp => console.log("cannot"));

                        database('reviews').where({
                            code : req.body.toDeleteID
                        }).del()
                        database('entries').where({
                            code : req.body.toDeleteID
                        }).del()
                        .then( database('users').where({
                            code : req.body.toDeleteID
                        }).del()
                        
                        
                        .catch(resp => console.log("cannot")).then(
                            io.to(req.body.socketid).emit('modifyanswer',{
                                status : 0,
                                message : `A(z) ${req.body.toDeleteID} kódú felhasználó sikeresen törölve lett`
                            })).catch(console.log("Delte error"))
                                                 
                        )
                        setTimeout(emitEvent, 400) 
                    }else{
                        console.log("ADMIN CANNOT BE DELETED")
                        io.to(req.body.socketid).emit('modifyanswer',{
                            status : -1,
                            message : `A(z) ${req.body.toDeleteID} kódú felhasználót nem lehet törölni mivel Admin`
                        })
                        
                    }}
                
                ).catch(e => {
                    if(e != null){
                        console.log(e)
                        io.to(req.body.socketid).emit('modifyanswer',{
                            status : 1,
                            message : `A(z) ${req.body.toDeleteID} kódú felhasználót nem lehet törölni mivel nem találja a rendszer`
                        })
                    }
                }).then(
                    adminow(socketid)
                )
            .then(removeMessagges(req.body.toDeleteID))
                
            }else{
                io.to(req.body.socketid).emit('logincheck', {
                    succes : false,
                    reason : "ACCES DENIED"
                }); 
            }
        })  
    }
    else{
        io.to(req.body.socketid).emit('logincheck', {
            succes : false,
            reason : "ACCES DENIED"
        }); 
    }
    res.sendStatus(200);
})
app.post('/statuschange', async function(req, res){
    if(req.body.hash === modifyhash)
    {
       await database('users')
        .where({ code: req.body.code })
        .update({ status: req.body.status })
        .catch(err => console.log(err))
         database
        .table('users')
        .orderBy('code', 'desc').select('*')
        .then(
            database('entries')
            .insert({
                time: Date.now(),
                code: req.body.code,
                status: req.body.status,
            })
            .then()
        ).then(adminow(adminConnected))
        
        emitEvent()

        res.sendStatus(200)
    }
    else{
        res.send("ACCES DENIED")
    }
  });
io.on("connection", (socket) => {
    

    activeConnections++;
    console.log("Active connections >> " + activeConnections);
    allConnections++;
    database
    .table('users')
    .orderBy('code', 'desc')
    .then(response => emitEvent());
    socket.on('disconnect', function() {
        activeConnections--;
        console.log("Active connections  >> " + activeConnections);
        if(socket.id == adminConnected){
            adminConnected = '';
            console.log("ADMIN OFFLINE");
        }})
});
app.post('/email',(req,res) =>{
 
    var mailOptions = {
        from: 'Üzenet <info@angyalvonal.hu>',
        to: 'info@angyalvonal.hu',
        subject: 'Üzenet: ' + req.body.name,
        text: req.body.message +  '\n\n\n\nEmail: ' + req.body.email + '\n\n\n\nEverest Earnings Mailer Sysyem - https://everestearnings.com'
    };
    console.log(req.body.review);
    if(req.body.review == true)     {
        mailOptions.from =  'Vélemény <info@angyalvonal.hu>'
        mailOptions.subject = 'Vélemény'  + req.body.name
    }
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
});
app.post('/review',(req,res) =>{
    console.log(req.body)
    if(req.body.sockedid != 0 ){
         bcrypt.compare(req.body.adminpass,adminpass,(err,result)=>{
             if(result){
    switch (req.body.mode) {
        case "new":
            console.log(req.body)
            database.table('reviews').insert({
                code:req.body.code,
                name: req.body.name,
                star: req.body.stars,
                review: req.body.review
            }).then(resp => 
                {
                    if(resp){
                        io.to(req.body.socketid).emit('modifyanswer',{
                            status : 0,
                            message : `Vélemény hozzáadva`
                           })
                    }
                })

            break;
        case "delete":
            if(req.body.name != ''){
            

                database.table('reviews').where({code:req.body.toDeleteID,name:req.body.name}).del().then(resp => {
                    if(resp == 1){
                        io.to(req.body.socketid).emit('modifyanswer',{
                            status : 0,
                            message : `A(z) ${req.body.toDeleteID} kódú felhasználóról a(z) ${req.body.name} című vélemény sikeresen törölve lett`
                           })
                    }else{
                        console.log("name")
                        io.to(req.body.socketid).emit('modifyanswer',{
                            status : 1,
                            message : `A(z) ${req.body.toDeleteID} kódú felhasználóról nincs vélemény a(z) ${req.body.name} címmel`
                           })
                    }

                } )
                

            }else{

                database.table('reviews').where({code:req.body.toDeleteID}).del().then(resp => {
                    console.log("RESP" + resp)
                    if(resp > 0){
                        io.to(req.body.socketid).emit('modifyanswer',{
                            status : 0,
                            message : `A(z) ${req.body.toDeleteID} kódú felhasználóról a vélemények sikeresen törölve lettek`
                           })
                    }else{
                        io.to(req.body.socketid).emit('modifyanswer',{
                            status : 1,
                            message : `A(z) ${req.body.toDeleteID} kódú felhasználóról nincs vélemény `
                           })
                    }


                })
                
            }
            
                break;
        default:
            io.to(req.body.socketid).emit('modifyanswer',{
                status : 0,
                message : `Szerver oldali hiba kérem próbálkozzon újra\t\t>>`
               })
            break;
      }
    }})}res.sendStatus(200)}
    
    )
app.get('/',(req,res) =>{
    res.sendFile(path.resolve(__dirname, '.', 'index.html'));       
    
})
app.get('*',(req, res) => {     
    res.sendFile(path.resolve(__dirname, '.', 'index.html'));              
   
                     
});
process.on('unhandledRejection', (error, promise) => {
    console.log(' Oh Lord! We forgot to handle a promise rejection here: ', promise);
    console.log(' The error was: ', error );
  });
  //------------------END OF ROUTES------------------//
