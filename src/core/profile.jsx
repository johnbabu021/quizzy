// import { Button } from "@mui/material"
import { onSnapshot } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import Header from "../components/home/header"
import Sidebar from "../components/sidebar/sidebar"
import { UserDetails } from "../context/usercontext"
import DocumentTitle from "../hooks/documentTitle"
import InputHandler from "../hooks/InputHandler"
import {  findUserFromId, handleVerifyEmail, updateUserProfile } from "../services/firebase"
import  '../styles/profile.css'


export      default function        Profile(){
    const       {state:{user}}=useContext(UserDetails)
    const       profileName=InputHandler('')
    const       profileEmail=InputHandler('')
    const       [userData,setUserData]=useState(null)
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
    // console.log(data)
}
    },[user])
    const       saveProfile=()=>{
updateUserProfile(user?.uid,profileName.value)

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
<p  className="alert">you haven't verified your email yet
<div    className="input">
    <button onClick={handleVerifyEmail}>verify</button>
</div></p>

</div>





</div>
<div    className="input">
<button>Logout</button>
</div>
<div>
    <p className="profile__head">Profile</p>
    <p  className="info gray">update your profile details</p>

</div>
<div    className="profile__change">
   <label   className=" info    gray">Profile Name</label>
    <div  className="input"    onChange={profileName.onChange} value={profileName.value}>
        <input type="text"/>
        <button onClick={saveProfile}>save</button></div>
</div>
<div    className="profile__change">
   <label   className="info gray" >Email address</label>
    <div className="input"    onChange={profileEmail.onChange}    value={profileEmail.value}>
        <input type="email"/>
        {/* <button onClick={saveProfile}>Save</button> */}
        </div>
</div>
            </div>
</div>
</div>
      </div>
    )
}