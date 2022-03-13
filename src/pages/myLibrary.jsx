import Header from "../components/home/header";
import Sidebar from "../components/sidebar/sidebar";
import      '../styles/mylibrary.css'
import      '../styles/home/teacherContent/home.css'
import { useEffect, useState } from "react";
export  default function    MyLibrary(){
useEffect(()=>{
  if(typeof window==='object'){

 
  const       input={value:Math.ceil(Math.random()*10)}
          const       identi=document.querySelector('.bar')
          const       cont=document.querySelector('.cont')
          console.log(identi)
  
          const   r=identi.getAttribute('r')
          const       c=Math.PI*(r*2)
          const       pcr=((100-Number(input.value))/100)*c
          identi.style.strokeDashoffset=pcr
          cont.setAttribute('data-pct',Number(input.value))
        }
  },[])

  const   [data,setData]=useState([
  {name:'practice'},
  {name:'participated'},
  {name:'completed'}
])


    return(
        <div>
            <div>
                <Header/>
            </div>
<div    className="teacher__component">
    <Sidebar/>
</div>

<div    className="teacher__contents"    >
{data.map(({name})=>{
  return(
<div  className="svg__cont">
{name}  
<div    className="cont" data-pct='100'>
<svg className="svg" width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle r="90" cx="100" cy="100" fill="transparent"  ></circle>
  <circle className="bar" r="90" cx="100" cy="100" fill="transparent"  strokeLinecap="round" stroke-dasharray="565.48" >
 
  </circle>

</svg>
    </div>
  </div>
)
})}
</div>
  


        </div>
    )
}