import React , {useEffect, useState}from 'react'
import './Nav.css'


function Nav() {

  const[show,handleshow] = useState(false)


useEffect(()=>{
  window.addEventListener('scroll',()=>{
    if(window.scrollY>500){
      handleshow(true)
    }
    else{
      handleshow(false)
    }
  })
},[])


  return (
    <div  className={`nav ${show && "nav_black" }`}>
        <img
        className='logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png'
        alt='no logo'
        />
    </div>
  )
}

export default Nav