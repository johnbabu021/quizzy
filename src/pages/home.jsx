// import Content from "../components/student/content";
import Header from "../components/home/header";
// import Sidebar from "../components/sidebar/sidebar";
import  '../styles/home/mainfile.css'
import TeacherContent from "../components/teacher/content";
import { useContext, useEffect, useRef } from "react";
import { completedCount } from "../services/firebase";
import { UserDetails } from "../context/usercontext";
import { useLocation, useNavigate } from "react-router-dom";
export  default     function        Home(){
const   CodeRef=useRef(null)
const   {state:{user},dispatch}=useContext(UserDetails)
const   navigate=useNavigate()
const       location=useLocation()
// console.log(location.pathname)
useEffect(()=>{
if(user){
    completedCount(user.uid)
    // navigate('/dashboard')
}
else{
    dispatch({type:'location',pathName:location})
    navigate('/login')
}
},[user])
    return(
        <div    className="home">

<Header CodeRef={CodeRef}/>


<TeacherContent CodeRef={CodeRef}/>

{/* <Content/> */}

        </div>
    )
}