// import { useEffect, useState } from 'react'
import  '../../styles/home/teacherContent/home.css'
import Sidebar from '../sidebar/sidebar'
import { useNavigate } from 'react-router-dom'
import { UserDetails } from '../../context/usercontext'
import { useContext, useEffect, useState } from 'react'
// import Aos from 'aos'
import {fetchUserQuizElements} from '../../services/firebase'

// import InputHandler from '../../hooks/InputHandler'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Loading from '../loader/Loading'
// import callApi from '../../utils/callApi'
// import { Tooltip } from 'antd';

export  default     function    TeacherContent({CodeRef}){
    // if(typeof window==="Object"){
    //     document.querySelector('.lets__head').style.fontWeight="bold"
    // }
    let navigate=useNavigate()
const   {state:{user}}=useContext(UserDetails)
const    compl=useState(localStorage.getItem('completed'))
const    patci=useState(localStorage.getItem('participated'))
// console.log(user,"user data")
useEffect(()=>{
    if(user){
   const    data= fetchUserQuizElements(user.uid)
console.log(data,"john ishere")
}
},[user])

    return(

        <div   className="teacher__component">
            <div    className="teacher__sidebar">
            <Sidebar/>

            </div>

            

            <div      className='teacher__contents'>
<div    className='div__home'>
    {/* <h1>Hey {user?.displayName} here is your dashboard</h1> */}
    <div className='dash__banner'   >
        <img src="Saly-1.png"/>
        {/* <img src="Saly-2.svg"/> */}
        {/* 
        <img src="Saly-16.svg"/> */}
        <h1 className='lets__head'>Let's find Everything
            <br></br>
Perfect for you
        </h1>

        </div>
<header className='header__home'  data-aos="fade-up" >
  

<button className="game__btn" onClick={()=>{
    navigate('/create')

}
    
    }>create a game</button>
<button className='game__btn'  onClick={()=>{
  
CodeRef.current.focus()

}
    }>Join a game</button>
</header>
<div   data-aos="fade-up"  className='section__home'>
<div    className="items__content">
{patci}<hr/> Total joined
</div>
<div    className="items__content">
{compl}<hr/>completed
</div>
<div    className="items__content">
120 <hr/>Quizes
</div>
</div>

<h1>Popular games</h1>
<div  data-aos="fade-up"  className='section__home'>
<div    className="items__content">
data
</div>
<div    className="items__content">
data
</div>
<div    className="items__content">
data
</div>





</div>


<h1>your Popular games</h1>
<div   data-aos="fade-up"  className='section__home'>
<div    className="items__content">
data
</div>
<div    className="items__content">
data
</div>
<div    className="items__content">
data
</div>
</div>

</div>

                </div>   
        </div>
    )
}