import { useContext, useEffect, useState } from "react"
import  {UserDetails} from '../context/usercontext'
import { doc, onSnapshot } from "firebase/firestore"
import { findUserFromId } from "../services/firebase"
import { db } from "../constants/firebase"
export      default function    Completed(){
    const   {state:{user}}=useContext(UserDetails)
const   [quiz,setQuiz]=useState([])
/*
made sychronous useeffect
*/
// console.log(quiz)
    useEffect(()=>{
   const        callerFunc=async()=>{
    if(user){
        const       userData=await  findUserFromId(user?.uid)
        onSnapshot(userData,(snaps)=>{
            snaps.forEach((snap)=>{
                const   compl=[]
                   compl.push(...snap.data().completed)
                   compl.forEach((createdSnap)=>{
                    onSnapshot(doc(db,'created',createdSnap.id),(snaps)=>{
                        // console.log(snaps.data())
                        setQuiz((quiz)=>[...quiz,snaps.data()])
                    })
                })
            })
        })
        
        
        }
   }
   callerFunc()
    },[user])
    return  (
        <div  className="division"  style={{
            display:'flex',
            gap:'2em',
            paddingTop:'2em',
            flexWrap:'wrap',
            // maxHeight:'10vh'
            // marginBottom:"80rem"
}}>
            

            {
              quiz.length!==0&&
                quiz?.map((item,index)=>{

return(      <div   className="single__book" key={index}>
    <h1>{item.name}</h1>
    <button className="book__btn">view</button>
    </div>
                       )
                 
                })
            }
            </div>
    )
}