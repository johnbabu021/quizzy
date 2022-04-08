import Header from "../components/home/header";
import Sidebar from "../components/sidebar/sidebar";
import      '../styles/mylibrary.css'
import      '../styles/home/teacherContent/home.css'
import {  useState } from "react";
import { minisideBar } from "../constants/sidebar/main";
import Practise from "../core/practise";
import BookMark from "../core/bookmark";
import Completed from "../core/completed";
import Status from "../core/status";
import Participated from "../core/participated";
export  default function    MyLibrary(){

const   [name,setName]=useState('practise')


    return(
        <div>
            <div>
                <Header/>
            </div>

            <div  className="teacher__component">

<div    className="teacher__sidebar">
    <Sidebar/>
</div>

<div    className="teacher__contents"    >
<div  className="library__parent">

<div  className="lib__sidebar">
{minisideBar.map((item,index)=>{
 
 return( <div key={index} onClick={()=>setName(item.name)} 
  className={`${item.name===name?'side__click':'side'}`}>{item.name}</div>)
})}
</div>





<div  className="svg__cont">

{name==='practise'&&<Practise/>}
{name==='bookmark'&&<BookMark/>}
{name==='completed'&&<Completed/>}
{name==='status'&&<Status/> }
{name==='participated'&&<Participated/>}




  </div>

  </div>

</div>
  


        </div>
        </div>
    )
}