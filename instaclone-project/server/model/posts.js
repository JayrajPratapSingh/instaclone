const mongoose= require("mongoose");

const postSchema=new mongoose.Schema({
    name:{type:String,required:true},
    location:{type:String,required:true},
    postImage:{type:String,required:true},
    description:{type:String,required:true},
    likes:{type:Number ,default:"1"},
    date: {type: Date,default: Date.now}
},{timestamps:true})

const postModel=mongoose.model('Post',postSchema)

module.exports=postModel;