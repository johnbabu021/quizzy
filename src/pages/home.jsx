// import Content from "../components/student/content";
import Header from "../components/home/header";
// import Sidebar from "../components/sidebar/sidebar";
import  '../styles/home/mainfile.css'
import TeacherContent from "../components/teacher/content";
export  default     function        Home(){


    return(
        <div    className="home">

<Header/>


<TeacherContent/>

{/* <Content/> */}

        </div>
    )
}