const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'public');
// app.use(express.static(publicPath));
app.set('view engine', 'ejs');
app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});
app.get('/profile',(req,resp)=>{
    const user = {
        name : 'Sejal kumari',
        email : 'sejal@gmail.com',
        roll : '1234',
        skill : ['c','java','python','c++','nodejs']
    };
    resp.render('profile',{user});
});
app.get('/login',(req,resp)=>{
    resp.render('login');
});
app.get('/aboutme',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});
app.get('/help',(req,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
});
app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/noPage.html`)
});
app.listen(5000);
