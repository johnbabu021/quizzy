import { arrayUnion, collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/home/header";
import Loading from "../components/loader/Loading";
import Sidebar from "../components/sidebar/sidebar";
import { db } from "../constants/firebase";
import { UserDetails } from "../context/usercontext";
import MajorQuiz from "./majorquiz";

/*asdfsdfas
asdfasdfadsf
*/
export  default function    Join(){
    const   [details,setDetails]=useState(null)
    const   {state:{user},dispatch}=useContext(UserDetails)
    const    navigate=useNavigate()
    const   {id}=useParams()
    const       location=useLocation()
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


        //check on any error here-----********
// const       updateQuery=


onSnapshot(q,(onSnapshot)=>{
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
            //  console.log(doc.data(),user.uid,userDocId.id)
 if(userDocId.id===user.uid){
   return  toast.error('you\'ve already joined to this game')
 
 }
 else{
    dispatch({type:'location',pathName:location})
    navigate('/login')
   return  setDetails(doc.data())
  

 }
         })
         if(doc.data().completed.length===0){
      return   setDetails(doc.data())
        }
     }
    
     
     
     )}
        
     }
     initialCaller()

     

    },[user,id])


    return      (
        <div>
<Header/>
<div    className="teacher__component">
<div    className="teacher__sidebar">
<Sidebar/>
</div>
<div    className="teacher__contents">

{details?<MajorQuiz  item={{results:details.questionItems}} id={id}/>:
<Loading height={'100vh'}/>}
</div>


</div>

        </div>

    )
}