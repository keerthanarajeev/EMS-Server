
// import dotnet package

require('dotenv').config()

// import connection file - node mongodb connection

require('./DB-Connection/connection')


// import express package

const express=require('express')

// import router

const router=require('./Routes/router')

// import cors

const cors=require('cors')

// create server using express

const emsServer=express()

// use cors in server

emsServer.use(cors())

// parse json data in server

emsServer.use(express.json())

// use router server

emsServer.use(router)

emsServer.use('/uploads',express.static("./uploads"))

// customize port for server

const PORT=4000||process.env.PORT

// run server app

emsServer.listen(PORT,()=>{
    console.log(`ems server started at port:${PORT}`);
})

// emsServer.post('/',(req,res)=>{
//     res.send(`ems server started at port 4000 `)
// })
