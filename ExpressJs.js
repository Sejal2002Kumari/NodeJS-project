const express = require('express');
const app = express();

app.get('',(req,res)=>{
    console.log("The name is ", req.query);
    console.log("The name is ", req.query.name);
    res.send('<h1>Welcome to the home page<h1>'+req.query.name)
});

app.get('/about', (req,res)=>{
    res.send('This is about us page')
});

app.get('/help',(req,res)=>{
    res.send('This is help page and it is very important')
});
app.listen(5000);