import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import  '../../styles/home/header/header.css'
// import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut  } from "firebase/auth";
import { useState } from 'react';
import { Button } from '@mui/material';
import {  UserDetails } from '../../context/usercontext';
import InputHandler from '../../hooks/InputHandler';
import toast from 'react-hot-toast';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../constants/firebase';
// import AlertFunc from '../loader/alerts';
import Swal from 'sweetalert2'


export  default     function        Header({CodeRef}){
    const   [userDetails,setUserDetails]=useState(false)
    const   navigate=useNavigate()
    const   [Null,setNull]=useState('')
    const   joinCode=InputHandler('')
   
    const   {state:{user,pop},dispatch} =useContext(UserDetails)
//   if(typeof window==="Object"){

//     const   hamBurg=document.querySelector('.hamburg')
//     if(pop){
//         hamBurg.classList.remove('hamburg__click')}
//   }

    // console.log(pop)
document.addEventListener('click',(e)=>{
const   details=document.querySelector('.user__data')
const   parentDiv=document.querySelector('.user__image__container')
if(userDetails&&!details.contains(e.target)&&!parentDiv.contains(e.target)){
   setUserDetails(false)
}

})
   
    //   initializeApp(firebaseConfig)
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

useEffect(()=>{
    const   button=document.querySelectorAll('.buttons')
    const   greyCode='#f2f2f2'
    for(let i of button){
        i.addEventListener('click',()=>
          { let color= i.style.backgroundColor=greyCode
            return  color
    }
        ) 
    }
})
useEffect(()=>{
    if(Null==='not found'){
        toast.error('enter a valid code')
    }
    if(Null==='found'){
        toast.success('your game will start shortly')
    }
},[Null,setNull])


const   login={
   onClick:(e)=>{
       e.target.classList.add('pressed__login')
       setTimeout(()=>{
           e.target.classList.remove('pressed__login')
       },200)
        signInWithPopup(auth,provider)
    .then((result)=>
    {
        dispatch({type:'login',user:result.user})
        localStorage.setItem('user',JSON.stringify(result?.user))
        
    }
    ).catch((e)=>{
        console.log(e)
    })

}
}

const   home={
    onClick:()=>{
        navigate('/')
        document.getElementById('home').scrollIntoView({behavior:'smooth',block:'end'})

    }

}   


    return(
        <div    className="header">
            <div    className='hamburg'     onClick={(e)=>{
                // console.log(pop)
    dispatch({type:"ham-pop",pop:!pop
})
    e.target.parentNode.children[0].classList.toggle('hamburg__click')
    // e.target.querySelector("::before").style.rotate="-45deg"
}
    }>
<div    className='hamburg__component'>

</div>
</div>
            <p  className='icon'    {...home}>QUIZZY</p>

            {/* <div    className="icon__right">

<p className='buttons' onClick={()=>{
    navigate('/')
    document.getElementById('teacher').scrollIntoView({behavior:'smooth',block:'end'})
    
    }}>For  Teachers</p>
<p className='buttons'  onClick={()=>{
        navigate('/')
    document.getElementById('student').scrollIntoView({behavior:'smooth',block:'end'})
    
    }}>For  Students</p>
    <p  onClick={()=>{
        navigate('/')
    document.getElementById('report').scrollIntoView({behavior:'smooth',block:'end'})}} className='buttons' >Reports</p>
            </div> */}
            <div    className="right__side">
                <div    className='input__container'>
                <input  ref={CodeRef} value={joinCode.value}   onChange={joinCode.onChange}  className='input__btn'  placeholder='Enter  a code' />
                <Button onClick={async()=>{
                    if(joinCode.value===''){
                        
                        toast((t) => (
                            <span  >
                              you should enter a code
                              <button   style={{color:'#3d71a1',padding:'2px',marginLeft:'2px',border:'none',cursor:'pointer',background:'none'}} onClick={() => toast.dismiss(t.id)}>
                                Close
                              </button>
                            </span>
                          ));                    }
                    else{
                     const  data=   await getDocs(collection(db,'created'))
                     setNull('')
                     data.forEach((doc)=>{
                        if(doc.id===joinCode.value){
                           setNull('found')
                            navigate(`/join/${joinCode.value}`)
                           
                        }
                        else{
                            setNull('not found')

                        }
                        }
                        
                        )
                    }

                }}>Submit</Button>

                </div>
{user?<div 
className='user__image__container'
onClick={()=>setUserDetails(true)}
style={{cursor:'pointer'}}>
    <img style={{
width:'2rem',
height:'2rem',
borderRadius:'50%',


}}
alt=""
src={user.photoURL}/>
{userDetails&&<div  className='user__data'>
<Button onClick={()=>navigate('/profile')}>Profile</Button>
<Button onClick={()=>
    {
        Swal.fire({
            title: 'Are you sure want to logout?',
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              
signOut(auth).then(()=>{
    dispatch({type:'logout'})
    localStorage.setItem('user',null)
}).catch((e)=>{
    console.log(e)
})
            } 
            // else if (result.isDenied) {
            //   Swal.fire('Changes are not saved', '', 'info')
            // }
          })

        

}
}
>Logout</Button>
<Button onClick={()=>navigate('/mylibrary')}>MyLibrary</Button>
<Button onClick={()=>navigate('/reports')}>Reports</Button>
<Button onClick={()=>navigate('/playground')}>Practice</Button>

</div>
}
</div>:<button  {...login}
className="login__button"
>Join Now</button>}
{/* <Toaster    position='top-left'/> */}
{/* <p  {...signup}>Signup</p> */}


            </div>
        </div>
    )
}