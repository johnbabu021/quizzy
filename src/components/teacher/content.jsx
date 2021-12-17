import { useEffect, useState } from 'react'
import  '../../styles/home/teacherContent/home.css'
import Sidebar from '../sidebar/sidebar'
import  '../../styles/playground/home.css'
import InputHandler from '../../hooks/InputHandler'

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
                <p>Fetch your questions from here!!</p>
                    {/* <p>What you want to search</p> */}
                    <input  type="text" {...search} placeholder='search...' />
              </div>
                            <div    className='playground__container'>
                           {
                               mni.map(item=>(<p   className='item_container'>{item.name}</p>))


                            
                           }
                            </div>

            </div>
                 
        </div>
    )
}