const router=require('express').Router()
const insta=require('../model/posts')
const express=require('express')
router.use(express.json())

const cloudniaryModule=require('cloudinary')

const cloudinary=cloudniaryModule.v2

cloudinary.config({
    cloud_name:"dp8cxhpn0",
    api_key:'686713394421617',
    api_secret:'buKJVs68eVDgpGFc8C5zzOBVYps'
})



router.get('/',async(req,res)=>{
    try{
        const data=await insta.find().sort({_id:-1})
        res.json(data)
    }catch(err){
        res.status(400).json({
            status:"failed",
            message:err.message
        })
    }
})

router.post('/add',async (req,res)=>{
    const {name,location,description,postImage}=req.body
    try{
        if(postImage){
            const uploadres=await cloudinary.uploader.upload(postImage,{
                upload_preset:'instaclone'
            })
            if(uploadres){
                const data=await insta.create({
                        name,
                        location,
                        description,
                        postImage: uploadres.url,
                    })
            }
        }
                res.json({
                message:'ok'
    })
    }catch(e){
        res.status(200).json({
            status:"failed",
            message:e.message
        })
    }
})



module.exports=router