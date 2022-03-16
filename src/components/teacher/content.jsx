// import { useEffect, useState } from 'react'
import  '../../styles/home/teacherContent/home.css'
import Sidebar from '../sidebar/sidebar'
import { useNavigate } from 'react-router-dom'
import { UserDetails } from '../../context/usercontext'
import { useContext, useState } from 'react'

// import InputHandler from '../../hooks/InputHandler'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Loading from '../loader/Loading'
// import callApi from '../../utils/callApi'
// import { Tooltip } from 'antd';

export  default     function    TeacherContent({CodeRef}){
    let navigate=useNavigate()
const   {state:{user}}=useContext(UserDetails)
const    [compl,setComp]=useState(localStorage.getItem('completed'))
const    [patci,setParti]=useState(localStorage.getItem('participated'))

    return(

        <div    className="teacher__component">
            <div    className="teacher__sidebar">
            <Sidebar/>

            </div>

            

            <div    className='teacher__contents'>
<div    className='div__home'>
    <h1>Hey {user?.displayName} here is your dashboard</h1>
<header className='header__home'>

<button className="game__btn" onClick={()=>{
    navigate('/create')

}
    
    }>create a game</button>
<button className='game__btn'  onClick={()=>{
  
CodeRef.current.focus()

}
    }>Join a game</button>
</header>
<div    className='section__home'>
<div    className="items__content">
{patci}<hr/> new joined
</div>
<div    className="items__content">
{compl}<hr/>completed
</div>
<div    className="items__content">
120 <hr/>Quizes
</div>
</div>

<h1>Popular games</h1>
<div    className='section__home'>
<div    className="items__content">
data
</div>
<div    className="items__content">
data
</div>
<div    className="items__content">
data
</div>





</div>


<h1>your Popular games</h1>
<div    className='section__home'>
<div    className="items__content">
data
</div>
<div    className="items__content">
data
</div>
<div    className="items__content">
data
</div>
</div>

</div>

                </div>   
        </div>
    )
}