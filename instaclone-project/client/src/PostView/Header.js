import React from 'react'
import {useNavigate} from 'react-router-dom'

function Header() {
    const navigate=useNavigate()
  return (
    <header className='header'>
        <div onClick={()=>navigate('/')} className='LOGO'>
            <img  src="./images/icon.png" alt="logo" />
            <p>Instaclone</p>
           
        </div>
        <div className='camera_icon'>
            <img onClick={()=>navigate('/form')} src="./images/camera.png" alt="camera" />
        </div>
    </header>
  )
}

export default Header