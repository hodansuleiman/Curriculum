const express = require('express');



const server = express();
server.use('/css', express.static(__dirname + "/css")); // if you see CSS this is where i want you to look, the root is ES6 so it will be ES6 
server.use('/js', express.static(__dirname + "/js")); // adding javascript
server.set('view engine', 'ejs'); // we want to use ejs as our view engine

const navs = ['About', 'Contact', 'Gallery' ];

server.use(express.json());//when i get a post request im going to turn it into json

server.get('/', (req,res) => {
       res.render('pages',{template:'landing', isAuthenticated:false, navs}); // we want it to render inside pages, and the template that we want it to render is landing , passing an object with a key valuse pair to that page. the template is equal to landing. 
    });

    server.post('/Login', (req,res) => {
       res.json({redirectURL:'/welcome'});
    });

    server.get('/logout', (req,res) => {
        res.json({redirectURL:'/'});
     });

    server.get('/welcome', (req,res) => {
        res.render('pages',{template:'gallery', isAuthenticated:true, navs}); // changed route
    });

    server.get('/about', (req,res) => {
    res.render('pages',{template:'about', isAuthenticated:true, navs}); 
    });

    server.get('/contact', (req,res) => {
    res.render('pages',{template:'contact', isAuthenticated:true, navs}); 
    });

    server.get('/gallery', (req,res) => {
        res.render('pages',{template:'gallery', isAuthenticated:true, navs}); 
        });

server.listen(8080,() => {
    console.log('The server is listening at PORT 8080')
});

