const dbConnect = require('./mongodb');
const deleteData = async () => {
    // console.log("function called");
    let data = await dbConnect();
    let result = await data.deleteMany(
        {name : 'max pro 5'}
    );
    
    console.log(result);
    if(result.acknowledged){
        console.log('record deleted');
    }
}

deleteData();