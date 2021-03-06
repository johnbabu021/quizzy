import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/home/header"
import { UserDetails } from "../context/usercontext"
import  '../styles/initial.css'
export      default function    InitailFunction(){
    const   navigate=useNavigate()
    const   {state:{user}}=useContext(UserDetails)
    useEffect(()=>{
if(user){
   navigate('/dashboard')
}
    },[user])
    return  (
       <div>
           <Header/>
            <div id="home"   className="sec">
            <svg className="svg__sec">
               
            <path fill="#E0F2F9">

            <animate attributeName="d"
             dur="6s" repeatCount="indefinite"
              values="M123.63,4.78C58.88,12.27,34.28-11.9,13.02,15.7C-4.75,38.48-14.32,153.77,63.69,188.97c68.24,30.8,138.63-9.43,172.27-78.99C255.75,69.05,193.75-5.76,123.63,4.78z;M123.63,4.78C41.5,14.05,29.65-14.91,13.02,15.7C-7,52.55-6.32,204.81,63.69,188.97c74.81-16.92,143.01-7.48,172.27-78.99C252.5,69.55,212.5-8.45,123.63,4.78z;M123.63,4.78C41.5,14.05,16.11-16.94,13.02,15.7C3,121.55,0.78,223.54,63.69,188.97c86.31-47.42,155.03-3.67,172.27-78.99C247.5,59.55,219.5-17.95,123.63,4.78z;M123.63,4.78C41.5,14.05,29.65-14.91,13.02,15.7C-7,52.55-6.32,204.81,63.69,188.97c74.81-16.92,143.01-7.48,172.27-78.99C252.5,69.55,212.5-8.45,123.63,4.78z;M123.63,4.78C58.88,12.27,34.28-11.9,13.02,15.7C-4.75,38.48-14.32,153.77,63.69,188.97c68.24,30.8,138.63-9.43,172.27-78.99C255.75,69.05,193.75-5.76,123.63,4.78z;"></animate>
            </path>
               
               </svg>
<section 
className="initial__sec"
>

<h1
data-aos="fade-left"
data-aos-duration="100"
    className="head"
    >
        a complete digital
        <br/> platform to test 
        <br/>
        and improve your skills

    </h1>
<p  className="home__info">Quizzy ensures best experiences for students<br/> and teachers
on improving their Knowledge.Help students <br/>
to learn things  easier than
Online sessions
</p>
<button 
onClick={()=>navigate('/dashboard')}
   className="get__started"  >get started</button>

{/* <p className="home__info">Intrested to learn online </p><button>Join now</button> */}


</section>
<div data-aos="fade-right" data-aos-duration="100">
<div className="bg__image"  style={
   {
      // paddingRight:"50px",
      width:'600px',
      height:'600px',
      backgroundRepeat:'no-repeat',
      // backgroundAttachment:'fixed',
      backgroundOrigin:'content-box',
      backgroundSize:"contain",
      backgroundClip:'padding-box',
      backgroundPosition:"center",
      backgroundImage:`url('https://quizzy-flax.vercel.app/new.svg')`
   }
}>
{/* <img src="teacher.svg" alt="" /> */}

</div>    </div>
</div>
{/* <div    className="wave">
    <img src="wave.svg"/>
</div> */}


<div  id="teacher"  className="sec">
<section  data-aos="fade-up"  className="initial__sec">
<h1    className="head">Improve the <br/>Quality of Teaching </h1>
<p  className="home__info">Compete yourself in quizzy<br/> make yourself a better person</p>
<button 
onClick={()=>navigate('/create')}
   className="get__started"  >View plan</button>


</section>
<div className="bg__image" data-aos="fade-up" data-aos-duration="100" style={
   {
      width:'600px',
      height:'600px',
      backgroundRepeat:'no-repeat',
      // backgroundAttachment:'fixed',
      backgroundOrigin:'content-box',
      backgroundSize:"contain",
      backgroundPosition:"center",
      backgroundImage:`url('https://quizzy-flax.vercel.app/teacher.png')`
   }
}>
{/* <img src="teacher.svg" alt="" /> */}

</div>



</div>

<div    className="sec  height__svg">


<section data-aos="zoom-in"   data-aos-duration="100"  id="student"  className="initial__sec ">
<h1 className="head">Our Process<br/> </h1>
<p  className="home__info">join events in quizzy<br/> make yourself a better person</p>
<button 
onClick={()=>navigate('/dashboard')}
   className="get__started"  >get started</button>


</section>





<div  className="svg__parent  svg__containers" data-aos="zoom-in" data-aos-duration="100">




<div>
<p className="as">1</p>
<img src="Inspire.svg" alt="" className="contents">
</img>
<svg   class="sh-icon-bg sh-type-1 page_speed_1926148674">


<path    className="svg__path" style={{
   color:"#65737e",
}} class="pro-box" fill="#f8f8f8">
<animate 
attributeName="d"
 dur="6s" repeatCount="indefinite" 
values="M123.4,68.4c-4.4,60.9-40.8,45.5-74.4,44.4c-33.7-1.2-47.7-13-47.7-44.4S30.6,1,62.3,11.6 C119.5,30.6,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-42,35.4-74.4,44.4c-31.1,8.6-47.7-13-47.7-44.4s27.9-52.5,61.1-56.8 C118.9,4.3,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-40.1,48.1-73.6,46.9C16.1,114.1,1.2,99.7,1.2,68.4s22.7-28.2,46.3-51.9 C75.8-11.7,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-42,35.4-74.4,44.4c-31.1,8.6-47.7-13-47.7-44.4s27.9-52.5,61.1-56.8 C118.9,4.3,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-40.8,45.5-74.4,44.4c-33.7-1.2-47.7-13-47.7-44.4S30.6,1,62.3,11.6 C119.5,30.6,125.6,37.1,123.4,68.4z;"></animate>
   
   </path>  
</svg>
<p className="icon__text">Playground</p>

   </div>




   <div>
<p className="as">2</p>
<img src="Grow.svg" alt="" className="contents">
</img>
<svg   class="sh-icon-bg sh-type-1 page_speed_1926148674">


<path    className="svg__path" style={{
   color:"#65737e",
}} class="pro-box" fill="#e3dcfa">
<animate 
attributeName="d"
 dur="6s" repeatCount="indefinite" 
values="M123.4,68.4c-4.4,60.9-40.8,45.5-74.4,44.4c-33.7-1.2-47.7-13-47.7-44.4S30.6,1,62.3,11.6 C119.5,30.6,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-42,35.4-74.4,44.4c-31.1,8.6-47.7-13-47.7-44.4s27.9-52.5,61.1-56.8 C118.9,4.3,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-40.1,48.1-73.6,46.9C16.1,114.1,1.2,99.7,1.2,68.4s22.7-28.2,46.3-51.9 C75.8-11.7,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-42,35.4-74.4,44.4c-31.1,8.6-47.7-13-47.7-44.4s27.9-52.5,61.1-56.8 C118.9,4.3,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-40.8,45.5-74.4,44.4c-33.7-1.2-47.7-13-47.7-44.4S30.6,1,62.3,11.6 C119.5,30.6,125.6,37.1,123.4,68.4z;"></animate>
   
   </path>  
</svg>

<p className="icon__text">Playground</p>

   </div>


   <div>
<p className="as">3</p>
<img src="lap.svg" alt="" className="contents">
</img>
<svg   class="sh-icon-bg sh-type-1 page_speed_1926148674">


<path    className="svg__path" style={{
   color:"#65737e",
}} class="pro-box" fill="#C6F5C1">
<animate 
attributeName="d"
 dur="6s" repeatCount="indefinite" 
values="M123.4,68.4c-4.4,60.9-40.8,45.5-74.4,44.4c-33.7-1.2-47.7-13-47.7-44.4S30.6,1,62.3,11.6 C119.5,30.6,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-42,35.4-74.4,44.4c-31.1,8.6-47.7-13-47.7-44.4s27.9-52.5,61.1-56.8 C118.9,4.3,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-40.1,48.1-73.6,46.9C16.1,114.1,1.2,99.7,1.2,68.4s22.7-28.2,46.3-51.9 C75.8-11.7,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-42,35.4-74.4,44.4c-31.1,8.6-47.7-13-47.7-44.4s27.9-52.5,61.1-56.8 C118.9,4.3,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-40.8,45.5-74.4,44.4c-33.7-1.2-47.7-13-47.7-44.4S30.6,1,62.3,11.6 C119.5,30.6,125.6,37.1,123.4,68.4z;"></animate>
   
   </path>  
</svg>
<p className="icon__text">Playground</p>

   </div>

   <div  className="">
<p className="as">4</p>
<img src="Grow.svg" alt="" className="contents">
</img>
<svg   class="sh-icon-bg sh-type-1 page_speed_1926148674">


<path    className="svg__path" style={{
   color:"#65737e",
}} class="pro-box" fill="#C6F5C1">
<animate 
attributeName="d"
 dur="6s" repeatCount="indefinite" 
values="M123.4,68.4c-4.4,60.9-40.8,45.5-74.4,44.4c-33.7-1.2-47.7-13-47.7-44.4S30.6,1,62.3,11.6 C119.5,30.6,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-42,35.4-74.4,44.4c-31.1,8.6-47.7-13-47.7-44.4s27.9-52.5,61.1-56.8 C118.9,4.3,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-40.1,48.1-73.6,46.9C16.1,114.1,1.2,99.7,1.2,68.4s22.7-28.2,46.3-51.9 C75.8-11.7,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-42,35.4-74.4,44.4c-31.1,8.6-47.7-13-47.7-44.4s27.9-52.5,61.1-56.8 C118.9,4.3,125.6,37.1,123.4,68.4z;M123.4,68.4c-4.4,60.9-40.8,45.5-74.4,44.4c-33.7-1.2-47.7-13-47.7-44.4S30.6,1,62.3,11.6 C119.5,30.6,125.6,37.1,123.4,68.4z;"></animate>
   
   </path>  
</svg>
<p className="icon__text">Playground</p>

   </div>
















   </div>







</div>
<div    className="sec">
<section  data-aos="zoom-up" className="initial__sec">
<h1 className="head">Improve the <br/>Knowledge </h1>
<p  className="home__info">Practise  in quizzy<br/> make yourself a better person</p>
<button 
onClick={()=>navigate('/playground')}
   className="get__started"  >get started</button>


</section>

<div  className="bg__image" data-aos="fade-up"  style={
   {
      width:'400px',
      height:'400px',
      backgroundRepeat:'no-repeat',
      // backgroundAttachment:'fixed',
      backgroundOrigin:'content-box',
      backgroundSize:"contain",
      backgroundPosition:"top left",
      backgroundImage:`url('https://lilacinfotech.com/lilac_assets/images/banner.svg')`
   }
}>
{/* <img src="teacher.svg" alt="" /> */}

</div>

</div>

<div   id="report" className="sec">


<section   data-aos="fade-up"  className="initial__sec">
<h1 className="head">Get Realtime <br/>Reports on events </h1>
<p  className="home__info">Create and review perfomace<br/>of students</p>
<button 
onClick={()=>navigate('/reports')}
   className="get__started"  >get started</button>


</section>
<div  data-aos="zoom-in">
<div className="bg__image"  style={
   {
      width:'600px',
      height:'600px',
      backgroundRepeat:'no-repeat',
      // backgroundAttachment:'fixed',
      backgroundOrigin:'content-box',
      backgroundSize:"contain",
      backgroundPosition:"center",
      backgroundImage:`url('https://quizzy-flax.vercel.app/reports.png')`
   }
}>
{/* <img src="teacher.svg" alt="" /> */}

</div>
</div>
</div>


       </div>
    )
}