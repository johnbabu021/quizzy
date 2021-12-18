import { useEffect, useState } from 'react'
import  '../../styles/home/teacherContent/home.css'
import Sidebar from '../sidebar/sidebar'
import  '../../styles/playground/home.css'
import InputHandler from '../../hooks/InputHandler'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export  default     function    TeacherContent(){
    const   [programs,setPrograms]=useState([])
    useEffect(()=>{
        fetch('https://opentdb.com/api_category.php')
        .then(item=>
              item.json())
            .then(res=>{setPrograms(res.trivia_categories).toLowerCase()})
            .catch((err)=>console.warn(err))
    },[])
    const   search=InputHandler()
let     mni
    const   searchArray=programs.map(item=>{return  {name:item.name.toLowerCase(),key:item.key}})
   mni=  searchArray.filter(item=>item.name.includes(search.value.toLowerCase()))
   
    return(

        <div    className="teacher__component">
            <div    className="teacher__sidebar">
            <Sidebar/>

            </div>

            <div    className='teacher__contents'>

            <div    className='main__search'>
               
            
               <div className='main__contain'>
               <p><div>Find</div> your topics</p>
                <button>Get Started<ArrowForwardIosIcon/></button>
               </div>
                    <input  type="text" {...search} placeholder='search...' />
                    <div  className='gradient__cont'>

              </div>
              </div>
              
                            <div    className={`${mni.length>0&&'playground__container'}`}>
                           {
                               mni.map((item,index)=>(<p key={index}  className='item_container'>{item.name}</p>))


                            
                           }
                           {mni.length===0&&<div  className='not__found'  > 
                           <p>Oops!! no data found</p>
                           <img  src="/search.svg"  alt=""/>  </div>}


                            </div>

            </div>
                 
        </div>
    )
}