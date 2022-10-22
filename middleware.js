const express = require('express');
const app = express();
const reqFilter = require('./middleware2');
const route = express.Router();

// app.use(reqFilter);
route.use(reqFilter);
app.get('/',(req,resp)=>{
    resp.send('Welcome to home page');
})
app.get('/about',(req,resp)=>{
    resp.send('Welcome to about page');
})

route.get('/users',(req,resp)=>{
    resp.send('Welcome to users page')
})
route.get('/contact',(req,resp)=>{
    resp.send('Welcome to contact page')
})
app.use('/',route);
app.listen(5000);