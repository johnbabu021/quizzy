import { useEffect, useState } from 'react'
import  '../../styles/home/teacherContent/home.css'
import Sidebar from '../sidebar/sidebar'
import  '../../styles/playground/home.css'
import InputHandler from '../../hooks/InputHandler'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Loading from '../loader/Loading'
import callApi from '../../utils/callApi'
// import { Tooltip } from 'antd';

export  default     function    TeacherContent(){
    const   [programs,setPrograms]=useState([])
    useEffect(()=>{
        async       function        fetchData(){
            const   res=    await   callApi('https://opentdb.com/api_category.php')
        setPrograms(res.trivia_categories)
        }
        fetchData()
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
               <p><p>Find</p> your topics</p>
                <button>Get Started<ArrowForwardIosIcon/></button>
               </div>
                    <input  type="text" {...search} placeholder='search...' />
                    <div  className='gradient__cont'>

              </div>
              </div>
              
                            <div    className={`${mni.length>0&&'playground__container'}`}>
                          
                        {
                            programs.length!==0?   
                        mni.map((item,index)=>(<p key={index}  className='item_container'>{item.name}</p>))
                        
                            :<Loading/>
                            
                        }
                          {(mni.length===0&&typeof  mni !=='undefined')&&(<div  className='not__found'  > 
                           <p>Oops!! no data found</p>
                           <img  src="/search.svg"  alt=""/>  </div>)}
                        

                            </div>

            </div>
                 
        </div>
    )
}