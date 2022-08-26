require('dotenv').config();
const express = require('express');
const path =require('path');
const sendMail = require('./mail');

const server = express();

server.use(express.static(path.resolve(`${__dirname}/public`))); // defining where to look
server.use(express.json());

server.get('/', (req,res) =>{
    res.sendFile('./index.html'); // getting what it looks for 
});

server.post('/contact', (req,res) => {
    sendMail (req.body, (err,data) => {
        if (err) {
            return res.status(500).json({message: err.message || 'Internal server err'})
        }
        return res.json({message: 'Message successfully sent.'})
    });
});


server.listen(8080,() =>{
    console.log('The server is running on port 8080.');
})