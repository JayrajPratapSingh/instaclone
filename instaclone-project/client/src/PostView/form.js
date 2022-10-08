import React,{ useState} from 'react'
import Header from './Header'

import { useNavigate } from 'react-router-dom'


function Form() {
    const navigate=useNavigate()
    const [data,setData]=useState({
        name:"",
        location:"",
        description:""

    })

    const [image,setImage]=useState("")
    const [url,setUrl]=useState("")

    const handleImageUpload=(e)=>{
        const file=e.target.files[0]
        setImage(file)
        
        const reader= new FileReader()

        if(file){
            reader.readAsDataURL(file);
            reader.onloadend=()=>{
                setUrl(reader.result)
            }
        }else{
            setUrl('')
        }

    }
   
    const submitData=(e)=>{
        e.preventDefault()
        fetch('https://instaclone-10x-sushant.herokuapp.com/post/add',{
                        method:"post",
                        headers:{
                            "Content-Type":"application/json",
                    },
                    body:JSON.stringify({
                        ...data,
                        "postImage":url
                       
                    })
                }).then(res=>res.json()).then(data=>{
                    navigate('/post')
                    console.log(data)
                }).catch(err=>console.log(err))
    }


  return (
    <>

    <Header/>
    <div className='Input_container'>
        <form onSubmit={(e)=>submitData(e)}  className='form' >
            <div className='image_path'>
            <input type="text" required value={image.name}  />
                <input type="file" onChange={handleImageUpload}  accept="image/png, image/jpeg" name='postImage' required />
            </div>
            <div className='authorAndLocation'>
                <input type="text" placeholder='Author' name='name' value={data.name} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} required />
                <input type="text" placeholder='Location' name='location' value={data.location} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} required />
            </div>
            <input className='des' type="text" placeholder='Description' name='description' value={data.description} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} required />
            <button   type='submit'>Post</button>
        </form>
    </div>
    </>
  )
}

export default Form