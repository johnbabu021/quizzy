// import Content from "../components/student/content";
import Header from "../components/home/header";
// import Sidebar from "../components/sidebar/sidebar";
import  '../styles/home/mainfile.css'
import TeacherContent from "../components/teacher/content";
import { useRef } from "react";
export  default     function        Home(){
const   CodeRef=useRef(null)

    return(
        <div    className="home">

<Header CodeRef={CodeRef}/>


<TeacherContent CodeRef={CodeRef}/>

{/* <Content/> */}

        </div>
    )
}