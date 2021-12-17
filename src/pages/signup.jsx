import { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import  '../styles/login/home.css'
export  default function        SignUp(){
let location=useLocation()
const   nameRef=useRef(null)
const   emailRef=useRef(null)
const   passwordRef=useRef(null)
let navigate=useNavigate()
// console.log(location)
const   [err,setErr]=useState('')

const   doSignup={
    onClick:()=>{
if(nameRef.current.value!==''&&emailRef.current.value!==''&&passwordRef.current.value!=='')
{
    navigate("/")

}

else{
setErr('all fields  are required')
}

    }
}
    return(
        <div    className='login'>
        <div   className='login_child'>
            <p>create   an  account</p>
            {err&&<label    className='label__login err'>{err}</label>}
        <label className='label__login'>Email</label>

        <input  type="email"  ref={emailRef}/>
        <label className='label__login'>Name</label>

        <input  type="text" ref={nameRef} />
        <label className='label__login'>Password</label>
           <input  type="password"  ref={passwordRef}/>
           <hr></hr>
           <button className='login_btn' {...doSignup}>Signup</button>
        </div>
 </div>
    )
}