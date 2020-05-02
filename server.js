var app = require('express')();
var path = require('path');
var fs = require('fs');
const express = require('express');
var https = require('https');

var bp = require('body-parser');
const cors = require('cors');
const nocaches = require('nocache');

var server = https.createServer({
    key: fs.readFileSync(__dirname + '/ssl/server.key'),
    cert: fs.readFileSync(__dirname + '/ssl/server.cert')
},app).listen(8080);

function nocache(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
  }
app.use(nocaches());

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

app.use('/images',express.static(__dirname + '/uploads'));
app.use('/public', express.static(path.join(__dirname, "/public")));
///test mini dbs//////////////////////////
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
    code: 666,
    status: 0,
    minutes:332,
    avatar: 'https://lh3.googleusercontent.com/proxy/JUV7RjoBTz4OftF0sbrrWbZniHQOh2jLmRpV2g3SNuikB9dLgAAkZiJnm1WILbiFeDWdmNjVuxsmaG-gb4ICuETH7OhwRNWkTNjSU6-kFzESev-r3nxbrDVQHsYvC4m4',
    password : 'pss',
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
const adminpass = usersdb[1].password;
//////////////////////////////////////////

const DeleteUser = (userid,sockedid) =>{
    let found = false;
    console.log("DeleteIniateted: " + userid + "\tFrom socket: " + sockedid)
    for (let index = 0; index < usersdb.length; index++) {
        const element = usersdb[index];
        if(element.code == userid){
            found = true;
            if(element.admin == false){
                usersdb.splice(index,1);
                console.log("Deleted user: " + userid);
                io.to(sockedid).emit('modifyanswer',{
                    status : 0,
                    message : `A(z) ${userid} kódú felhasználó fiókja ki lett törölve`
                   })
                   io.emit('event',usersdb);
            }
            else{
                console.log("Cannot delete admin user: " + userid);
                io.to(sockedid).emit('modifyanswer',{
                    status : -1,
                    message : `Admin fiókot nem lehet törölni`
                   })
            }
        }
        
    }
    if(!found){
        io.to(sockedid).emit('modifyanswer',{
            status : 1,
            message : `Nincs ilyen felhasználó`
           })
    }
}


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
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
    console.log(password)
    let user = {
        name: req.body.name,
        quote: req.body.quote,
        code: parseInt(req.body.code),
        status: 0,
        avatar: 'http://192.168.1.69:4000/images/' + identifier,
        password : password,
        admin : false,
        minutes: parseInt(req.body.minutes),
        messages: [
            {
                title: "Üdvözlünk az Angyalvonalon",
                message: "Ha bármilyen kérdésed lenne lépj kapcsolatba az adminisztrátorral"
            }
        ]
    }
    usersdb.push(user);
    io.to(req.body.socketid).emit('adminow',usersdb)
    io.to(req.body.socketid).emit('modifyanswer',{
        status : 0,
        message : `A(z) ${req.body.code} kódú felhasználó sikeresen létre lett hozva és a jelszó hozzá \t\t>> ${password}`
       })
    io.emit('event',usersdb);

   
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


})
app.post('/adminow',function(req,res){
    if(req.body.adminpass ==  adminpass){
        io.to(req.body.sockedid).emit('adminow',usersdb)
    }
    else{
        console.log("wrong admin");
    }
    res.sendStatus(200);
})
app.post('/modify',function(req,res){
    if(req.body.sockedid != 0 ){
               if(req.body.adminpass == adminpass){
                    if(req.body.mode == "delete"){
                         DeleteUser(req.body.toDeleteID,req.body.socketid);
                    }else if(req.body.mode == "new"){
                        CreateUser(req.body.userdetails);
                    }
                    else{
                        io.to(req.body.socketid).emit('logincheck', {
                            succes : false,
                            reason : "ACCES DENIED"
                        });     
                    }
               }else
               {
                io.to(req.body.socketid).emit('logincheck', {
                    succes : false,
                    reason : "ACCES DENIED"
                }); 
               }

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
    io.emit('event',usersdb)
    socket.on('disconnect', function() {
        if(socket.id == adminConnected){
            adminConnected = '';
            console.log("ADMIN OFFLINE");
        }})
});
app.post('/email',(req,res) =>{
 
    console.log("Emali");
    console.log(req.body)

});

app.get('/',nocache,(req,res) =>{
    res.sendFile(path.resolve(__dirname, '.', 'index.html'));       
    io.emit('event',usersdb)
    
})
app.get('*', nocache,(req, res) => {     
    
    res.sendFile(path.resolve(__dirname, '.', 'index.html'));              
   
                     
  });
