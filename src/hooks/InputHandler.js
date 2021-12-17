import { useState } from "react";



export  default function    InputHandler(){
    const   [input,setInput]=useState('')

    const   onChange=(e)=>{
        setInput(e.target.value)
    }
    
    return{
        value:input,
        onChange:onChange,
    
    }
}