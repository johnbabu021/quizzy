import { useNavigate } from "react-router-dom"
import  '../styles/initial.css'
export      default function    InitailFunction(){
    const   navigate=useNavigate()
    return  (
        <div>
<section style={{
    minHeight:'100vh',
    text:'white',
    minWidth:'100vw',
    padding:'0px',
    margin:'0px',
    position:'fixed',
    top:'0',
    display:'grid',
    placeItems:'center'
}}
className="initial__sec"
>
<div    style={{
marginRight:'auto',
paddingLeft:'100px',
}}>
<h1
    style={{
    textTransform:'uppercase',
    color:'white',
    fontSize:'60px'
    }}
    className="head"
    >
        a platform to<br></br> <span
        style={{
            color:'rgb(16,185,129)'
        }}
        >test and improve</span> your skills
    </h1>

<button 
onClick={()=>navigate('/dashboard')}
   className="get__started"  >get started</button>
</div>

 


</section>



        </div>
    )
}