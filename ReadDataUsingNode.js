const dbConnect = require('./mongodb');

//reading data from mongodb database and displaying in console through node js
//using then 
dbConnect().then((resp)=>{
    resp.find({}).toArray().then((data)=>{
        console.log(data);
    });
});
// console.log(dbConnect());

//using async await
// const main = async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }

// main();