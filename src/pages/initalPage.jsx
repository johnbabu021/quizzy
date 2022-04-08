import { useNavigate } from "react-router-dom"
import Header from "../components/home/header"
import  '../styles/initial.css'
export      default function    InitailFunction(){
    const   navigate=useNavigate()
    return  (
       <div>
           <Header/>
            <div  id="home"   className="sec">
<section 
className="initial__sec"
>

<h1
    className="head"
    >
        a platform to test <br/>and improve your skills
    </h1>
<p  className="home__info">Compete yourself in quizzy<br/> make yourself a better person</p>
<button 
onClick={()=>navigate('/dashboard')}
   className="get__started"  >get started</button>




</section>
<div>
    <img src="banner.svg" alt=""/>
    </div>
</div>
{/* <div    className="wave">
    <img src="wave.svg"/>
</div> */}


<div  id="teacher"  className="sec">


<section    className="initial__sec">
<h1 className="head">Improve the <br/>Quality of Teaching </h1>
<p  className="home__info">Compete yourself in quizzy<br/> make yourself a better person</p>
<button 
onClick={()=>navigate('/create')}
   className="get__started"  >View plan</button>


</section>
<div>
<img src="teacher.svg" alt="" />

</div>
</div>

<div    className="sec">


<section  id="student"  className="initial__sec">
<h1 className="head">Improve the <br/>future of students </h1>
<p  className="home__info">join events in quizzy<br/> make yourself a better person</p>
<button 
onClick={()=>navigate('/dashboard')}
   className="get__started"  >get started</button>


</section>
<div>
<img src="student.svg" alt="" />

</div>
</div>
<div    className="sec">


<section   className="initial__sec">
<h1 className="head">Improve the <br/>Knowledge </h1>
<p  className="home__info">Practise  in quizzy<br/> make yourself a better person</p>
<button 
onClick={()=>navigate('/playground')}
   className="get__started"  >get started</button>


</section>
<div>
<img src="learn.svg" alt="" />

</div>
</div>

<div   id="report" className="sec">


<section    className="initial__sec">
<h1 className="head">Get Realtime <br/>Reports on events </h1>
<p  className="home__info">Create and review perfomace<br/>of students</p>
<button 
onClick={()=>navigate('/reports')}
   className="get__started"  >get started</button>


</section>
<div>
<img src="report.svg" alt="" />

</div>
</div>


       </div>
    )
}