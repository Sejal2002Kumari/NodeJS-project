//http node js k andr request and response ko handle krta hai


const http = require('http');
function dataControl (req,resp){
    resp.write("Hi Everyone ");
    resp.end();
}
http.createServer(dataControl).listen(5000);