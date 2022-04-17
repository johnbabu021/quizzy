// import Header from "../components/home/header";
import Sidebar from "../components/sidebar/sidebar";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import      '../styles/login/home.css'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useEffect } from "react";
import { UserDetails } from "../context/usercontext";
import { useLocation, useNavigate } from "react-router-dom";
export  default     function        Login(){
    const provider = new GoogleAuthProvider();
const   auth=getAuth()
const   navigate=useNavigate()

    const       {state:{user,pathName},dispatch}=useContext(UserDetails)
    // let location = useLocation();

    let from = pathName?.pathname || "/";
    // console.log(location.state)
console.log(pathName)
useEffect(()=>{
    if(user){
        navigate(from,{replace:true})
    }
},[user])
    const   login={
        onClick:async(e)=>{
            // e.target.classList.add('pressed__login')
            // setTimeout(()=>{
            //     e.target.classList.remove('pressed__login')
            // },200)
          signInWithPopup(auth,provider)
         .then((result)=>
         {
             dispatch({type:'login',user:result.user})
             localStorage.setItem('user',JSON.stringify(result?.user))
             navigate(from, { replace: true });

         }
         ).catch((e)=>{
             console.log(e)
         })

     }
     }
    return      (
    
<div    className="teacher__contents">   

<div    className="login__parent">
    <h3>Login to Quizzy</h3>
<div    {...login}   className="login__container white">
<GoogleIcon/><p>Continue with Google
</p>
</div>

<div    className="login__container">
<GitHubIcon/><p>Continue with Github
</p>
</div>

</div>


    </div>

    )
}