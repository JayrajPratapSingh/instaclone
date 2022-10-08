const express =require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const cors=require('cors')
const postRouter=require('./routes/post')
const app=express()
const port=process.env.PORT || 8080;
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));

app.use(cors())
app.use('/post',postRouter)
app.use(bodyparser.json())
mongoose.connect('mongodb+srv://cluster0.m9ncwae.mongodb.net/InstaClone?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    
        console.log("connection successful")
    
}).catch((err)=>{
    console.log("no connection")
})

app.get('*',(req,res)=>{
    res.send("404 page not found")
})
app.listen(port
    ,()=>console.log('server started successully'))