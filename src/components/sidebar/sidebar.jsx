import  '../../styles/home/sidebar/sidebar.css'
import  {sidebar}   from    '../../constants/sidebar/main'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export  default     function        Sidebar(){
    const   [click,setClick]=useState('')
    const navigate=useNavigate()
    return(
        <div    className="main__sidebar">
           {
               sidebar.map(({name,Icon,direct},sidebarNavigateIndex)=>(<p   
                onClick={()=>{
                    setClick(name) 
               navigate(`${direct}`)
                   
                }}  
                 key={sidebarNavigateIndex} className={click===name?'border__click':'border__normal'}>{Icon&&<Icon/>}{name}</p>))
           }
        </div>
    )
}