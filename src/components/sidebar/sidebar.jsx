import  '../../styles/home/sidebar/sidebar.css'
import  {sidebar}   from    '../../constants/sidebar/main'
import { useState } from 'react'
export  default     function        Sidebar(){
    const   [click,setClick]=useState('')
    return(
        <div    className="main__sidebar">
           {
               sidebar.map(({name,Icon})=>(<p   
                onClick={()=>{
                    setClick(name) 
                   
                }}  
                 key={name} className={click===name?'border__click':'border__normal'}>{Icon&&<Icon/>}{name}</p>))
           }
        </div>
    )
}