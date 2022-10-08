import React,{useState,useEffect} from 'react'
import Header from './Header'
import Post from './Post'
import './postview.css'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function PostView() {
  const [posts,setPosts]=useState('')
  useEffect(()=>{
    fetch('https://instaclone-10x-sushant.herokuapp.com/post',{
    method:"GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type':'application/json'
    },
  }).then(res=>res.json()).then(res=>{setPosts(res)
  toast.success("data fetch successfully",{position:"bottom-right"})})
  },[])
  return (
    <>
    <Header/>

    <section className='post_section'>
    {
      Array.isArray(posts) && posts.map((post,i)=>{
        
      return (
        
      <div key={i}> <Post post={post} i={i}/></div>
      )
    })
    }
    <ToastContainer />

    </section>
   
    </>
  )
}

export default PostView