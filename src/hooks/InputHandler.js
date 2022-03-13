import { useState } from "react";



export  default function    InputHandler(data,additionalFunc=null,setIn=false){
    const   [input,setInput]=useState(data)
    const   onChange=(e)=>{
        setInput(e.target.value)
        additionalFunc&&additionalFunc(e.target.value)
    }
    
    return{
        value:input,
        onChange:onChange,
        setInput:setInput
    
    }
}