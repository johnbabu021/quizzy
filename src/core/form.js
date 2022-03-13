import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/home/header";
import Sidebar from "../components/sidebar/sidebar";
import  '../styles/home/teacherContent/home.css'
import  '../styles/create.css'
import InputHandler from "../hooks/InputHandler";
import { useState ,useContext} from "react";
import toast, { Toaster } from "react-hot-toast";
import { addDoc, arrayUnion, collection, doc, onSnapshot, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import { db } from "../constants/firebase";
import { Button, Tooltip } from '@mui/material';
import  {UserDetails} from '../context/usercontext'



export  default function    CreateForm(){
    const   navigate=useNavigate()
const       [searchParams]=useSearchParams()
const   name=searchParams.get('name')
const   number=searchParams.get('number')
const   {state:{user}}=useContext(UserDetails)
const [submit,setSubmit]=useState(false)
  const     [gameElements,setGameElements]=useState([])
let     [currentQuestion,setCurrentQuestion]=useState(0)
const   [code,setCode]=useState(null)
    const   que=InputHandler('')
    const   crct=InputHandler('')
    const   opt1=InputHandler('')
    const   opt2=InputHandler('')
    const   opt3=InputHandler('')
const   copyFunc=(code)=>{
    navigator.clipboard.writeText(code)
}
    return(
        <div>
<Header/>
<div    className="teacher__component">
    <div    className="teacher__sidebar">
        <Sidebar/>
    </div>
   <div className="teacher__contents">
 { !code? <div    className="create__form">
      
<label  htmlFor="questions">Enter the question {currentQuestion+1}</label>
<input onChange={que.onChange}  value={que.value} id="questions" name="answers" type="text"/>
<label htmlFor="crct" >Enter    correct answer</label>
<input  onChange={crct.onChange}  value={crct.value}   id="crct" type='text'/>
<label htmlFor="crct" >Enter    option1</label>
<input  onChange={opt1.onChange}  value={opt1.value}  id="op1" type='text'/>
<label htmlFor="crct" >Enter    option2</label>
<input  onChange={opt2.onChange}  value={opt2.value}   id="op2" type='text'/>
<label htmlFor="crct" >Enter    option3</label>
<input  onChange={opt3.onChange}  value={opt3.value}  id="op3" type='text'/>

<button    className="submit__button" onClick={
    (e)=>{
        const   incorrect_answers=[]
for(let i=1;i<4;i++){
incorrect_answers.push(document.getElementById(`op${i}`).value)
}

        e.target.classList.add('submit__press')

setTimeout(()=>{
    e.target.classList.remove('submit__press')
},200)
if(que.value===''){
toast.error('enter all the fields')

}



else{
    if(currentQuestion+1<Number(number)){

  setCurrentQuestion(currentQuestion+1)
    toast.success(`item ${currentQuestion+1} has added`)
    setGameElements(gameElements=>[...gameElements,{question:que.value,correct_answer:crct.value,incorrect_answers:[opt1.value,opt2.value,opt3.value]}])
      que.setInput('')
          crct.setInput('')
        opt1.setInput('')
        opt2.setInput('')
        opt3.setInput('')

}
else{
    setSubmit(true)
    async function  get(){
     try{
        const    setDoc= await       addDoc(collection(db,"created"),{
            name:name,
            participated:[],
            completed:[],
            questionItems:[...gameElements,{question:que.value,correct_answer:crct.value,incorrect_answers:[opt1.value,opt2.value,opt3.value]}],
            number:number,
            timestamp:serverTimestamp(),
            userDetails:{
                id:user?.uid,
                name:user?.displayName,
                email:user?.email
            }
          })

          onSnapshot(query(collection(db,'users'),where('uid','==',user?.uid)),(docDetails)=>{
            docDetails.forEach(async(singleItem)=>{
      await updateDoc(doc(db,'users',singleItem.id),{
        created:arrayUnion({id:setDoc.id})
      })
            })
          
          })

          //.then(()=>{
        //      toast.success('new quiz is added')
        //     //  setTimeout(()=>{
        //     //      navigate('/dashboard')
        //     //  },500)
        //  })
        toast.success('quiz added successfully')
         setCode(setDoc.id)
         
     
     }
     catch(e){
         console.log(e)
     }
     }
     get()


}
}



}}>submit</button>

    </div>:
    <div    className="document__cont">

<div    className="document__id">

<label>Live preview</label>
<Tooltip    title="live preview">
<Button className="button__create">Live Preview</Button>

</Tooltip>
       
    </div>
    <div    className="document__id">
    <label>Code</label>
        <p  className="code">{code}</p> 
        <Tooltip    title="copy code"  >
        <Button className="button__create" onClick={()=>{
            toast.success('code copied successfully')
            copyFunc(code)}}>Copy Code</Button>
        </Tooltip>
   
    </div>
    <div    className="document__id">
        <label>Link</label>
    <p   className="code" onClick={()=>
        window.open(`https://quizzy-flax.vercel.app/join/${code}`)}>
            https://quizzy-flax.vercel.app/join/{code}</p>
   <Tooltip title="copy link">
   <Button className="button__create"  onClick={()=>{
       toast.success('link copied successfully')
       copyFunc(`https://quizzy-flax.vercel.app/join/${code}`)}}>Copy Link</Button>

   </Tooltip>

    </div>
        </div>
    
    }
    <div    style={{
        marginTop:'30px',
        display:'flex',
        gap:'30px'
    }}>
       
    </div>
   </div>

</div>

            
        </div>
    )
}