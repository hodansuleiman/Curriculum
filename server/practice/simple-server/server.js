const express = require('express');

const server = express();

server.use(express.json());//when i get a post request im going to turn it into json

server.get('/name', (req,res) => {
    res.json({
        "First Name": "John" , "Last Name": "Doe"
    })
});

server.listen(8080,() => {
    console.log('The server is listening at PORT 8080')
});

server.post('/name', (req,res) => {
    console.log(req.body);
    const {firstname, lastname} = req.body; // two keys returning one thing 
    const fullname = firstname + lastname; // destructing
    res.json({"fullname": fullname})
});


server.get('/age', (req,res) => {
    res.json({
        "myAge": "33" // must use quoation on object keys 
    })
});

server.post('/age', (req,res) => {
    const {myage} = (req.body); // destructing , have to use curly braces 
 res.json({ "message": `You are ${myage} years old`})  // destructing , have to use curly braces 
});

server.get('/money', (req,res) => {
res.json({
    "checking": "25.00" , "saving":"75.00"
})
});

server.post('/money',(req,res) => {
    const {checking, savings} =req.body;
    const money = checking + savings;
    res.json({ "message": `You have ${money} dollars in the bank`})
})

server.get('/digital-crafts/cohort/:year', (req,res) => {
console.log('year', req.params.year)
res.json({"message": `I study at the Digital Crafts ${req.params.year} cohort`})
});

server.get('/user/:user', (req,res) => {
    console.log('user', req.params.user)
    res.json({"message": `Hello ${req.params.user} `})  // or you can say  res.json({"message": `Hello ${user}`})
    });
    
    
