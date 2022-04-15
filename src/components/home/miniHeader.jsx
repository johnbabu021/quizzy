import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import  { UserDetails } from "../../context/usercontext"
import InputHandler from "../../hooks/InputHandler"
import      '../../styles/home/header/header.css'
import toast from 'react-hot-toast';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../constants/firebase';
export      default function    MiniHeader(){
    const   navigate=useNavigate()
const       {state:{pop},dispatch}=useContext(UserDetails)
const   [Null,setNull]=useState('')

const   joinCode=InputHandler('')
useEffect(()=>{
    if(Null==='not found'){
        toast.error('enter a valid code')
    }
    if(Null==='found'){
        toast.success('your game will start shortly')
    }
},[Null,setNull])
return  (
<div  className="mini__header"  >
{pop&&   
<div    className="mini__header__comp">
<div    className="mini__header__btn">
    <button onClick={()=>{
dispatch({type:'ham-pop',pop:false})
    }}>Join Now</button>
    <button onClick={()=>{
        navigate('/dashboard')
        dispatch({type:'ham-pop',pop:false})
    }}>Go to Dashboard</button>

    </div>


<div    className="header__components">
<div    className="mini__join__input">
<input value={joinCode.value}   onChange={joinCode.onChange}  className="input__btn"  placeholder="Enter a code"></input>
<button onClick={async()=>{
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
                            dispatch({type:'ham-pop',pop:false})

                        }
                        else{
                            setNull('not found')

                        }
                        }
                        
                        )
                    }

                }}>submit</button>
</div>
<div    className="header__description">

<div    className="header__des__content">
    <img alt="" src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/29-09-2021/programs.svg"/>
  <h3 className="header__dtls">Programs</h3>
  <p>teahers hub</p>
  <p>student hub</p>
  <p>challenges</p>
  <p>playground</p>

    </div>

<div    className="header__des__content">
    <img alt="" src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/29-09-2021/company.svg"/>
    <h3 className="header__dtls">Company</h3>
<p>about us</p>
<p>details</p>
  {/* <p>Contact US</p> */}

    </div>

<div    className="header__des__content">
<img alt="" src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/29-09-2021/community.svg"/>
<h3 className="header__dtls">Buisness</h3>
<p>Pricing</p>
<p>contact</p>

    </div>

    </div>
    </div>
    </div>


}


</div>

    )
}