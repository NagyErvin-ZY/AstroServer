//------------------START OF SERVICECODE------------------//
var app = require('express')();
var path = require('path');
var fs = require('fs');
const express = require('express');
var https = require('https');
var nodemailer = require('nodemailer');
const knex = require('knex');
const bcrypt = require('bcrypt');


const database = knex({
client: 'pg',
connection: {
    host : '127.0.0.1',
    user: 'postgres',
    password: 'admin',
    database: 'angyalvonal'
}

});



var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nagy.ervin59@gmail.com',
      pass: 'Goalstriker599a'
    }
  });
  
 
var bp = require('body-parser');
const cors = require('cors');

var server = https.createServer({
    key: fs.readFileSync(__dirname + '/ssl/server.key'),
    cert: fs.readFileSync(__dirname + '/ssl/server.cert')
},app).listen(8080);


app.use(bp()); 

var io = require('socket.io').listen(server);
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
var upload = multer({ storage: storage });

//------------------END OF SERVICECODE------------------//
//////////////////////////////////////////////////////
//------------------START OF USE------------------//
app.use('/images',express.static(__dirname + '/uploads'));
app.use('/public', express.static(path.join(__dirname, "/public")));
//------------------END OF USE------------------//
//////////////////////////////////////////////////////
//------------------START OF CONSTANTS------------------//
const modifyhash = "9917d774b0857f868ebf9c81dea3e43c4d337529fe1d8d3a73362a5d869dc42b";
const usersdb = [{
    name: 'Molnár kata',
    quote: "This is my quoute",
    code: 646,
    status: 0,
    avatar: 'https://192.168.1.69:8080/images/yodaboda.jpg',
    password : "password",
    admin : false,
    minutes: 232,
    messages: [
        {
            title: "TestTitle",
            message: "testmessage lorem ipsum gecokam"
        }, {
            title: "TestTitle",
            message: "testmessage lorem ipsum gecokam"
        }
    ]
},
{
    name: 'Isten',
    quote: "Alvilág genyó",
    code: 255,
    status: 0,
    minutes:332,
    avatar: 'https://lh3.googleusercontent.com/proxy/JUV7RjoBTz4OftF0sbrrWbZniHQOh2jLmRpV2g3SNuikB9dLgAAkZiJnm1WILbiFeDWdmNjVuxsmaG-gb4ICuETH7OhwRNWkTNjSU6-kFzESev-r3nxbrDVQHsYvC4m4',
    password : 'Avatatjana',
    admin : true,
    messages: [
        {
            title: "TestTitle",
            message: "testmessage lorem ipsum gecokam"
        }, {
            title: "TestTitle",
            message: "testmessage lorem ipsum gecokam"
        }
    ]
}]
var adminpass = '';
var adminid = 0;
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
//------------------END OF METHODS------------------//
//////////////////////////////////////////////////////
//------------------START OF ROUTES------------------//


app.post('/message',function(req,res){
    if(adminConnected != ''){
        if (req.body.adminpass == adminpass) {
            console.log("Admin message request");
           usersdb.forEach(element => {
                if(element.code == req.body.code){
                    let message = {
                        title: req.body.title,
                        message: req.body.message
                    }
                    console.log("Admin message request DONE");
                    element.messages.push(message);
                    io.to(req.body.socketid).emit('modifyanswer',{
                        status : 0,
                        message : `A(z) ${req.body.code} kódú felhasználónak az üzenet sikeresen el lett küldve`
                       })
                       console.log(req.body)
                    console.log(element.messages);
                }
            });
        }}
        res.sendStatus(200);
})
app.post('/upload', upload.single('avatar'), (req, res) => {
    
    const password = makeid(11);
    const hash = bcrypt.hashSync(password,10);

    console.log(hash + ">> for user >> " + req.body.code);
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
                name: req.body.name,
                quote: req.body.quote,
                code: parseInt(returningCode),
                status: 0,
                avatar: 'https://192.168.1.69:8080/images/' + identifier
           }).then(response => console.log(response)).then(res.sendStatus(200)).catch(e => console.log("ERROR" + e));
        }).then(trx.commit).then(
            database('users').select('*').then(response => io.emit('event',response))
           ).then(
            database('users').select('*').then(response => io.to(req.body.sockedid).emit('adminow',response.map((user,i)=>{
                user.minutes = 99;
                return user;
            })))
           ).then(io.to(req.body.socketid).emit('modifyanswer',{
            status : 0,
            message : `A(z) ${req.body.code} kódú felhasználó sikeresen létre lett hozva és a jelszó hozzá \t\t>> ${password}`
           }))
        .catch(trx.rollback)
    }).catch(e => console.log("ERROR" + e));
    
    


    
});
app.post('/loginverify', function(req, res){
    console.log(Date.now() + " POST "+ req.url)
    let good = false;
    if(req.body.socketid != null){
        let socketids = req.body.sockedid;
        usersdb.forEach(element =>{
            if((element.code == req.body.userid) && (element.password == req.body.password) && (element.admin == req.body.admin)){
               {
                   io.to(req.body.socketid).emit('logincheck', {
                    loggedIn : true ,
                     name : element.name,
                    status: element.status,
                    minutes : element.minutes,
                messages : element.messages,
                    hash: modifyhash});
                 if(req.body.admin == true){
                     console.log("ADMIN JOINED");
                     adminConnected = req.body.socketid
                 }
                    good = true;
                  }
            
            }
            else{
                
            }
        })
        
        
    }else{
        io.to(req.body.socketid).emit('logincheck', {
            loggedIn : false });
         
    }
    if(!good){
        io.to(req.body.socketid).emit('logincheck', {
            loggedIn : false

    });
       
    }
    res.sendStatus(200);

});
app.get('/testrt',function(req,res){
    console.log(Date.now() + " GET "+ req.url)
    usersdb[1].status = 0;
    res.sendStatus(200);


});
//Avatatjana

app.post('/adminow',function(req,res){

    const pss = "Avatatjana";
    console.log("adminow");
    bcrypt.compare(req.body.adminpass,adminpass,(err,result)=>{
        if(result){
            database('users').select('*').then(response => io.to(req.body.sockedid).emit('adminow',response.map((user,i)=>{
                user.minutes = 99;
                if(user.code != adminid){
                    user.admin = false;
                }
                else{
                    user.admin = true;
                }
                return user;
            })));
            
        }else{
            console.log("Acces Denied to unatohrized admin");
        }
    })
    
    res.sendStatus(200);
})
app.post('/modify',function(req,res){
    if(req.body.sockedid != 0 ){
       
        console.log("DeleteIniateted: " + req.body.toDeleteID + "\tFrom socket: " + req.body.socketid)
        bcrypt.compare(req.body.adminpass,adminpass,(err,result)=>{
            if(result){
                
               database('login').where({
                   code : req.body.toDeleteID
               }).then(response => 
                    {   
                        if(!response[0].admin){
                        database('login').where({
                            code : req.body.toDeleteID
                        }).del().catch(resp => console.log("cannot"));
                        database('users').where({
                            code : req.body.toDeleteID
                        }).del().catch(resp => console.log("cannot")).then(
                            io.to(req.body.socketid).emit('modifyanswer',{
                                status : 0,
                                message : `A(z) ${req.body.toDeleteID} kódú felhasználó sikeresen törölve lett`
                            })
                        ).then(setTimeout(function(){ database('users').select('*').then(response => io.emit('event',response)); }, 200));
                        
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
                    database('users').select('*').then(response => io.emit('event',response)).then(
                        database('users').select('*').then(response => io.to(req.body.sockedid).emit('adminow',response.map((user,i)=>{
                            user.minutes = 99;
                            if(user.code != adminid){
                                user.admin = false;
                            }
                            else{
                                user.admin = true;
                            }
                            return user;
                        })))
                    )
                )
                
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
app.post('/statuschange', function(req, res){
    
    usersdb.forEach(element => {
        if(element.code == req.body.code){
            if(req.body.hash === modifyhash)
            {
                
                element.status = parseInt(req.body.status);
                console.log(Date.now() + ">>\tUserID" + req.body.code + " Status:" + req.body.status)
                io.emit('event',usersdb);
                if(adminConnected != ''){
                     io.to(adminConnected).emit('adminow',usersdb);
                }
                res.sendStatus(200);
            }else{
                res.send("ACCES DENIED")
            }
            
        }
    });
  });
io.on("connection", (socket) => {
    console.log("New socket connected:\t" + socket.id);
    database('users').select('*').then(response => io.emit('event',response));
    socket.on('disconnect', function() {
        if(socket.id == adminConnected){
            adminConnected = '';
            console.log("ADMIN OFFLINE");
        }})
});
app.post('/email',(req,res) =>{
 
    console.log("Emali");
    console.log(req.body.email)
    var mailOptions = {
        from: 'AngyalMailer',
        to: 'nagy.ervin59@gmail.com',
        subject: 'Angyalvonal Mailer: ' + req.body.name,
        text: req.body.message +  '\n Email: ' + req.body.email
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
});

app.get('/',(req,res) =>{
    res.sendFile(path.resolve(__dirname, '.', 'index.html'));       
    
})
app.get('*',(req, res) => {     
    
    res.sendFile(path.resolve(__dirname, '.', 'index.html'));              
   
                     
  });

  //------------------END OF ROUTES------------------//