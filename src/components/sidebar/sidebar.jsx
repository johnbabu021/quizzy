import  '../../styles/home/sidebar/sidebar.css'
import  {sidebar}   from    '../../constants/sidebar/main'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDetails } from '../../context/usercontext'
export  default     function        Sidebar(){
window.addEventListener('resize',()=>{
    console.log(window.innerWidth)
// dispatch({})
})

    const       {state:{click},dispatch}=useContext(UserDetails)
    const navigate=useNavigate()
    return(
        <div    className="main__sidebar">
           {
               sidebar.map(({name,Icon,direct},sidebarNavigateIndex)=>(<p   
                onClick={()=>{
                    dispatch({type:'sidebar',click:name})
               navigate(`${direct}`)
                   
                }}  
                 key={sidebarNavigateIndex} className={click===name?'border__click':'border__normal'}>{Icon&&<Icon/>}{name}</p>))
           }
        </div>
    )
}