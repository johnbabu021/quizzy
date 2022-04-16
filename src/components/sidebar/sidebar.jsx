import  '../../styles/home/sidebar/sidebar.css'
import  {sidebar}   from    '../../constants/sidebar/main'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDetails } from '../../context/usercontext'
import { useEffect } from 'react'
export  default     function        Sidebar(){
window.addEventListener('resize',()=>{
    console.log(window.innerWidth)
// dispatch({})
})

    const       {state:{click},dispatch}=useContext(UserDetails)
    const navigate=useNavigate()


    useEffect(()=>{
        const       data=window.location.pathname
        const   result=data.toUpperCase()
// console.log(result)

        dispatch({type:"sidebar",click:result})
    },[])
  
    // console.log(result)
    return(
        <div    className="main__sidebar">
           {
               sidebar.map(({name,Icon,direct},sidebarNavigateIndex)=>(
               <p   
                onClick={()=>{
                    dispatch({type:'sidebar',click:name})
               navigate(`${direct}`)
                //    console.log(click.toUpperCase())
                }}  
                 key={sidebarNavigateIndex} 
                 className={(click.toUpperCase()===name.toUpperCase()||click.toUpperCase()===direct.toUpperCase())?'border__click':'border__normal'}
                 >{Icon&&<Icon/>}{name}</p>))
           }
        </div>
    )
}