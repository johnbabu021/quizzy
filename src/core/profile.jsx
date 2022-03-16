import { Button } from "@mui/material"
import { useContext } from "react"
import { UserDetails } from "../context/usercontext"
import  '../styles/profile.css'


export      default function        Profile(){
    const       {state:{user}}=useContext(UserDetails)
    return  (
        <div    className="profile__parent">

<div    className="profile__container">
<img src={user?.photoURL}/>
<div    className="name__container">
<p  className="name">{user?.displayName}</p>
<p  className="mail gray">{user?.email}</p>
</div>





</div>
<div>
    <p  className="profile green">Profile</p>
    <p  className="profile gray">update your profile details</p>

</div>
<div    className="profile__change">
   <label   className="name">Profile Name</label>
    <div  className="input">
        <input type="text"/>
        <Button>save</Button></div>
</div>
<div    className="profile__change">
   <label   className="name">Email address</label>
    <div className="input">
        <input type="email"/>
        <Button>Save</Button></div>
</div>
            </div>
    )
}