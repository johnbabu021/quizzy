

// todo
// chart.js
// implement
// per day practise





import  '../styles/playground/item/home.css'
import { Button } from 'antd';
import  '../styles/login/home.css'
// import Loading from "../components/loader/Loading";
import { useContext, useState } from "react";
import { useEffect } from "react";
import      toast from 'react-hot-toast'
import { addDoc, arrayRemove, arrayUnion, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../constants/firebase';
// import { async } from '@firebase/util';
import { UserDetails } from '../context/usercontext';
import {  updateCompleted } from '../services/firebase';
import { useCallback } from 'react';
export  default   function  MajorQuiz({item:{results},id=null}){
const       [itemLength,setItemLength]=useState(10)

const   [completed,setCompleted]=useState(false)
const   {state:{user}}=useContext(UserDetails)
const   [question,setQuestion]=useState(null)
const   [score,setScore]=useState(0)
const   notify=()=>{
    toast.error('you should enter a value')
}
const   [submit,setSubmit]=useState(false)
// const   [submitted,setSubmitted]=useState([])
let [result,setResult]=useState([])
    const   unicodes=[{
        string:'&#039;',
        code:'\u0027'
    },{
        string:'&quot;',
        code:'\u0027'
    }]

    const   newItem=
    
    results.map(item=>{
if(item.question.includes('&')){

    return  unicodes.map(({string,code})=>{
        let modified
        if(item.question.includes(string))
            modified=  item.question.replaceAll(string,code)
        else
        return  null
        return  modified
    })
}
else{
    return  item.question

}
})

const   resultItem=
    
    results.map(item=>{
return  item.incorrect_answers.map(data=>{

   if(data.includes('&')){
    return  unicodes.map(({string,code})=>{
        let modified
        if(data.includes(string))
            modified=  data.replaceAll(string,code)
        else
        return  null
        return  modified
    })
   }
   else
   return   data
})
})



// useEffect(()=>{

//--done changed useEffect check it with any error


    //added result.length

    //checked with three useEffect groups

    

// useEffect(()=>{
//    const        caller=()=>{
    
//    }
//    caller()
//     //missing resultItem and newItem check them if available
// },[])
 const      caller=useCallback(
     ()=>{
    setItemLength(results.length)

    if(resultItem&&newItem){
        setQuestion(newItem[0])
    
    
    }
    try{ 
        if(results.length!==0){
     setResult(item=>[...item,{id:0,option:results[0].correct_answer}])
     for(let i=1;i<=resultItem[0].length;i++){
         setResult(item=>[...item,{id:i,option:resultItem[0][i-1]}])
     }
 }
 }
 catch(e){
    //  console.log(e)
 }
 },[])
 useEffect(()=>{
     

 caller()
 
 
 },[caller])


//setResult,newItem,resultItem,results
   


const       handleQuestionSubmit=async(e)=>{
    try{
        const   form=document.getElementById('ansform')
        const       formData=new FormData(form)
        const       gameElem=formData.get('game')
        setSubmit(true)
        if(!gameElem){
        notify()
        }
        
        
        if(gameElem){
            const   correct=document.getElementById('answer0')
            const   submitted=document.getElementById(`answer${gameElem}`)
            correct.parentNode.children[1].classList.add('da')
            correct.parentNode.children[2].style.border="5px solid green"

if(gameElem==='0'){
setScore(score+1)
toast.success('your answer is correct')
}

else{
    toast.error('your answer is wrong')
submitted.parentNode.children[1].classList.add('red')
// const   sub=submitted.parentNode.children[1].querySelector("::before")
// getComputedStyle(submitted.parentNode.children[1],':before').getPropertyValue('color').toEqual('rgb(0,0,0)')

submitted.parentNode.children[2].style.border="5px solid red"
}
// e.target.children[1].classList.add('button__load')
// console.log(e.target.children[0])
e.target.disabled=true

            setTimeout(()=>{
                submitted.parentNode.children[2].style.border="5px solid #aaa"
                correct.parentNode.children[2].style.border="5px solid #aaa"
setSubmit(false)
                submitted.parentNode.children[1].classList.remove('red')
if(results.length===1){
    setCompleted(true)
    console.log('here is that')
    console.log(id)
    console.log(results.length)
    if(id===null){
        console.log('hi')

const   docRef=localStorage.getItem('userDocId')
        console.log(docRef,"docRef")
        // let practise=0


// console.log(doc.data().practise) 



const   updationFunc=async()=>{
    const       docData=await   getDoc(doc(db,"users",docRef))
    
docData.data().practise.forEach((data)=>{
    console.log(data)
if(data.date===`${new Date().getFullYear()} ${new Date().getMonth()} ${new Date().getDate()}`)
{
    console.log('same is found')
    const       practiseCount=data.count
   
   const    sameDateRemoval=async()=>{
    await   updateDoc(doc(db,"users",docRef),{
        practise:arrayRemove({
            count:practiseCount,
            date:`${new Date().getFullYear()} ${new Date().getMonth()} ${new Date().getDate()}`
        })
    })

   } 
   sameDateRemoval()
const   previousAddition=async()=>{
    await   updateDoc(doc(db,'users',docRef),{
        practise:arrayUnion({count:practiseCount+1,date:`${new Date().getFullYear()} ${new Date().getMonth()} ${new Date().getDate()}`})
    })
}
   previousAddition()
}

else{
    console.log('no same function')
    const   newUpdation=async()=>{
        await   updateDoc(doc(db,'users',docRef),{

            practise:arrayUnion({count:1,date:`${new Date().getFullYear()} ${new Date().getMonth()} ${new Date().getDate()}`})
        })
    }
    newUpdation()
    
}

//experimental subject make sure it will happen
                        // if(!data){
                        //     console.log('no same function')
                        //     const   newUpdation=async()=>{
                        //         await   updateDoc(doc(db,'users',docRef),{

                        //             practise:arrayUnion({count:1,date:`${new Date().getFullYear()} ${new Date().getMonth()} ${new Date().getDate()}`})
                        //         })
                        //     }
                        //     newUpdation()
                            
                        // }
})
  
}
updationFunc()


        
            // console.log(practiseData)
         
            
                
    }
    if(id&&user){
        updateCompleted(user?.uid,id)

        onSnapshot(doc(db,'created',id),async(snapDoc)=>{
            await       updateDoc(doc(db,'created',id),{
                completed:arrayUnion({id:user.uid,score:score})
            })
        })


       
    }

}
                correct.parentNode.children[1].classList.remove('da')
            newItem.shift()
            results.shift()
            setQuestion(newItem[0])
            toast.success('you submitted an answer')
        
            setResult([{id:0,option:results[0].correct_answer}])
// console.log(results)
            for(let i=1;i<=results[0].incorrect_answers.length;i++){
            setResult(item=>[...item,{id:i,option:results[0].incorrect_answers[i-1]}])
        }
        e.target.disabled=false

           },2000)
        }
    }
  catch(e){
    //   console.log(e)
  }
  
}
if(result.length===0){
    const       cont=document.querySelector('#cont')
    if(cont){
cont.setAttribute('data-pct',Number(score))
    }

}

    return(

        <div    className="major__quiz">
    <div    className="quiz__elements">
    {(!completed)?(
       <form    id="ansform" className="answers">

           <p>{question}</p>
{
    
    results.length!==0&& result.sort(()=>0.5-Math.random())?.map(({id,option},index)=>{
          return(
          <div   key={index} className="ans">  
                    <input   type={'radio'}    id={`answer${id}`}   value={id}   name="game" />
                    <label className='answersNode' htmlFor={`answer${id}`}>{option}</label>
         <div   className='check before'></div>
          </div>         
  
      )})
  }


           </form>
    ):(<div>{score} / {itemLength}</div>)}
 {!completed&&  <Button  className={`login_btn    submit `} 
   onClick={(e)=>handleQuestionSubmit(e)}>{!submit&&'Submit'}
{ submit&& 
 <svg    width={'60px'}  height="40px"  viewBox='0 0 36 46' className={`${submit&&'button__load'}`}>
   <circle
   strokeLinecap='round'
   strokeWidth={2}
   r={8}
   cx={43}
   cy={20}
   fill="none"
  ></circle>
       </svg>}  
       </Button>}

    </div>
        </div>
    )
}   