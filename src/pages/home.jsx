// import Content from "../components/student/content";
import Header from "../components/home/header";
// import Sidebar from "../components/sidebar/sidebar";
import  '../styles/home/mainfile.css'
import TeacherContent from "../components/teacher/content";
import { useContext, useEffect, useRef } from "react";
import { completedCount } from "../services/firebase";
import { UserDetails } from "../context/usercontext";
export  default     function        Home(){
const   CodeRef=useRef(null)
const   {state:{user}}=useContext(UserDetails)
useEffect(()=>{
if(user){
    completedCount(user.uid)
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