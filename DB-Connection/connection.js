const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

// using mongoose connect

mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Mongo db Connected to EMS Server");
}).catch((err)=>{
    console.log('Mongo db Connection Failed');
})