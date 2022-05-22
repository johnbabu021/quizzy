import Header from "../components/home/header";
import Sidebar from "../components/sidebar/sidebar";
import  '../styles/home/teacherContent/home.css'
import  '../styles/create.css'
import InputHandler from "../hooks/InputHandler";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
/*

*/
// import { useState } from "react";
export      default     function    Create(){
    const   navigate=useNavigate()
    const       name=InputHandler('')
    const       number=InputHandler('')
//    const        [error,setError]=useState('')
    return  <div >
        <Header/>
       <div className="teacher__component">
       <div    className="teacher__sidebar">
        <Sidebar/>

        </div>
        <div    className="form__contents">
        <div className="p">Create your games here!</div>

<div className="create__form">
   {/* <p   className="error"   style={{color:'red'}}>{error&&error}</p> */}
{/* <label  htmlFor="game__name">Enter the Name of Game</label> */}
<input  {...name} id="game__name"   placeholder="Enter the Name of Game" type="text"/>
{/* <label  htmlFor="game__number"></label> */}
<input  {...number}
  id="game__number"
 placeholder="Enter the Number of Questions" 
   type="number" 
     max="100"/>
<button 
className="submit__button" 
 onClick={(e)=>{
    e.target.classList.add('submit__press')
    setTimeout(()=>{
        e.target.classList.remove('submit__press')
    },2000)
    if(name.value===''||number.value===''){
      toast.error('you must enter the name and number')
    }
else{
   
navigate(`/create/form?name=${name.value}&&number=${number.value}`)
}
}}>submit</button>
</div>


</div>
       </div>


    </div>
}