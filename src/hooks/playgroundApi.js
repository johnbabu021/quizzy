import { useEffect } from "react";

export      default     function        generateApi(){
    useEffect(()=>{
        fetch('https://opentdb.com/api.php?amount=10&category=9')
   .then((item)=>{
       setShow(false)
       return     item.json()
   })
   .then((item)=>{
setCategroy(item)
console.log(category)
   }).catch((err)=>{
       console.log(err)
   })
    })
}