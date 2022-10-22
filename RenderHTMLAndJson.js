const express = require('express');
const app = express();

app.get('',(req,res)=>{
    console.log("The name is ", req.query);
    console.log("The name is ", req.query.name);
    res.send(`<h1>Welcome to the home page<h1>
            <a href="/about">Go to about page</a>`+req.query.name)
});

app.get('/about', (req,res)=>{
    res.send(
        `<input type= "text" placeholder = "Name" value="${req.query.name}"/>
        <button>Click</button>
        <a href="/">Go to home page</a>
        `)
});

app.get('/help',(req,res)=>{
    res.send([{
        name : 'Sejal',
        email : 'sejal@gmail.com'

    },
    {
        name : 'Sneha',
        email : 'sneha@gmail.com'

    },
    {
        name : 'Prince',
        email : 'prince@gmail.com'

    }
]);
});
app.listen(5000);