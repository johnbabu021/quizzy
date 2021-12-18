// import { Button } from 'antd';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  '../styles/login/home.css'
import  *   as  CONST   from    '../constants/values/names'

export  default function    Login(){
    const   [err,setErr]=useState('')
    const   nameRef=useRef(null)
    const   passwdRef=useRef(null)
const   navigate=useNavigate()


const   doLogin=()=>{
if(nameRef.current.value===CONST.name&&passwdRef.current.value===CONST.password){

    navigate('/')


}
else{
    setErr('please  enter   a valid  name    and password')

}
}
    return(

        <div    className='login'>
         <div   className='login_child'>
             <p>Please do login</p>
         {err&&(
                <label className='label__login  err'>{err}</label>
             ) } 
             <label className='label__login'>Email</label>
           

         <input  type="email" ref={nameRef} />
         <label className='label__login'>Password</label>
            <input  type="password" ref={passwdRef}/>
            <hr></hr>
            <button className='login_btn' onClick={doLogin}>login</button>
         </div>
  </div>
    )
}