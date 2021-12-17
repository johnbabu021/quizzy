import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import  '../../styles/home/header/header.css'

export  default     function        Header(){
    const   navigate=useNavigate()

useEffect(()=>{
    const   button=document.querySelectorAll('.buttons')
    const   greyCode='#f2f2f2'
    for(let i of button){
        i.addEventListener('click',()=>
          { let color= i.style.backgroundColor=greyCode
            return  color
            }
        ) 
    }
})

const   login={
  onClick:()=>navigate('/login')
}
const   signup={
    onClick:()=>navigate('/signup')
}
const   home={
    onClick:()=>navigate('/')
}   


    return(
        <div    className="header">
            <p  className='icon'    {...home}>QUIZZY</p>

            <div    className="icon__right">
<p className='buttons'>For  Work</p>
<p className='buttons'>For  Teachers</p>
<p className='buttons'>For  Students</p>
            </div>
            <div    className="right__side">
<p className='buttons'>Enter  a code</p>
<p  {...login}>Login</p>
<p  {...signup}>Signup</p>
            </div>
        </div>
    )
}