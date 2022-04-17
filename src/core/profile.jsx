// import { Button } from "@mui/material"
import { onSnapshot } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"
import Header from "../components/home/header"
import Sidebar from "../components/sidebar/sidebar"
import { UserDetails } from "../context/usercontext"
import DocumentTitle from "../hooks/documentTitle"
import InputHandler from "../hooks/InputHandler"
import  {getAuth,signOut}   from    'firebase/auth'
import {  findUserFromId, handleVerifyEmail, updateUserProfile } from "../services/firebase"
import VerifiedIcon from '@mui/icons-material/Verified';
import  '../styles/profile.css'
import Swal from "sweetalert2"
import { useLocation, useNavigate } from "react-router-dom"


export      default function        Profile(){
    const       {state:{user},dispatch}=useContext(UserDetails)
const   auth=getAuth()
    const       profileName=InputHandler('')
    const       profileEmail=InputHandler('')
    const       [verified,setVerified]=useState(false)
    const       [userData,setUserData]=useState(null)
    const       [error,setError]=useState(false)
    const       navigate=useNavigate()
    const       location=useLocation()
    // console.log(userData)
    useEffect(()=>{
if(user){
    const   q=findUserFromId(user?.uid)
    onSnapshot(q,(wholeMatch)=>{
        wholeMatch.forEach((doc)=>{
              setUserData(doc.data())
    
        }  
        )
})
setVerified(user?.emailVerified)
    // console.log(data)
}
else{
    dispatch({type:'location',pathName:location})
    navigate('/login')
}
    },[user])
    const       saveProfile=()=>{
        if(profileName.value!==""){
updateUserProfile(user?.uid,profileName.value)
setError(false)
}
else{
setError(true)
}

    }
    DocumentTitle('profile . Quizzy')

  
    return  (
      <div>
              <Header/>


<div    className="profile">
              
<div    className="teacher__sidebar"><Sidebar/></div>
<div    className="profile__content">
<div    className="profile__cover"></div>

<div    className="profile__parent">
<div    className="profile__container">
<img src={user?.photoURL} alt=""/>
<div    className="name__container">
<p  className="name">{userData?.name}</p>
<p  className="mail gray">{user?.email}</p>
{verified?<p  className="success"  ><p>your email has been verified </p><VerifiedIcon/> </p>:<p  className="alert">you haven't verified your email yet
<div    className="input">
    <button onClick={handleVerifyEmail}>verify</button>
</div></p>}

</div>





</div>
<div    className="input    out">
<button onClick={()=>
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
}>Logout</button>
</div>
<div>
    <p className="profile__head">Profile</p>
    <p  className="info gray">update your profile details</p>

</div>
<div    className="profile__change">
   <label   className=" info    gray">Profile Name</label>
    <div  className="input col"    onChange={profileName.onChange} value={profileName.value}>
        <input 
        type="text"  
        className={`${error&&'error'}`}
         placeholder={`${error?'enter your name correctly':""}`}/>
        <button onClick={saveProfile}>save</button></div>
</div>
{/* <div    className="profile__change">
   <label   className="info gray" >Email address</label>
    <div className="input"    onChange={profileEmail.onChange}    value={profileEmail.value}>
        <input type="email"/>
        {/* <button onClick={saveProfile}>Save</button> */}
        {/* </div> */}
{/* </div> */} 
            </div>
</div>
</div>
      </div>
    )
}