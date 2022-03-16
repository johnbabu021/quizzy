import { initializeApp } from "firebase/app";
import { arrayUnion, collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "../components/home/header";
import Loading from "../components/loader/Loading";
import Sidebar from "../components/sidebar/sidebar";
import { db } from "../constants/firebase";
import { UserDetails } from "../context/usercontext";
import MajorQuiz from "./majorquiz";

export  default function    Join(){
    const   [details,setDetails]=useState(null)
    const   {state:{user}}=useContext(UserDetails)
    const   {id}=useParams()
    useEffect(()=>{
   
         const      initialCaller=async()=>{
            const       dataField=doc(db,'created',id)
const   participatedData={
    id:user?.uid,
}
        await   updateDoc(dataField,{
            participated:arrayUnion(participatedData)
        })
        const   q=query(collection(db,'users'),where('uid','==',user?.uid))

const       updateQuery=onSnapshot(q,(onSnapshot)=>{
    onSnapshot.forEach(async(item)=>{
        await       updateDoc(doc(db,'users',item.id),{
            participated:arrayUnion(id)
        })
    })
})


    if(user)
    { 
     onSnapshot(dataField,(doc)=>{
    doc.data().completed?.map((userDocId)=>{
             console.log(doc.data(),user.uid,userDocId.id)
 if(userDocId.id===user.uid){
     toast.error('you\'ve already joined to this game')
 
 }
 else{
     setDetails(doc.data())

 }
         })
         if(doc.data().completed.length===0){
         setDetails(doc.data())
        }
     }
    
     
     
     )}
        
     }
     initialCaller()

     

    },[user])


    return      (
        <div>
<Header/>
<div    className="teacher__component">
<div    className="teacher__sidebar">
<Sidebar/>
</div>
<div    className="teacher__contents">

{details?<MajorQuiz  item={{results:details.questionItems}} id={id}/>:
<Loading/>}
</div>


</div>

        </div>

    )
}