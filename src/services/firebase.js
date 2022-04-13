// import { applyActionCode, getAuth, sendSignInLinkToEmail } from "firebase/auth"
import { arrayUnion, collection, doc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore"
// import { useState } from "react"
import { db } from "../constants/firebase"

export  const       completedCount=async(uid)=>{
    let   completed=0
    let participated=0
await   onSnapshot(query(collection(db,"created"),where('userDetails.id',"==",uid)),(userData)=>{
    userData.forEach((singleUser)=>{
// console.log(singleUser.data().completed)
// console.log(singleUser.data().completed.length)
console.log(singleUser.data())
if(singleUser.data().completed.length>0){

    completed+=singleUser.data().completed.length
}
if(singleUser.data().participated.length>0){

    participated+=singleUser.data().participated.length
}
// console.log(participated)
    })
            localStorage.setItem('completed',JSON.stringify(completed))
            localStorage.setItem('participated',JSON.stringify(participated))


})

}
export  const       findUserFromId=(uid)=>{
const       q=query(collection(db,'users'),where('uid','==',uid))
return  q
}


export  const   updateUserProfile=async(uid,name)=>{
const   q=findUserFromId(uid)
const       user=await  getDocs(q)
    user.forEach(async(document)=>{
        await updateDoc(doc(db,'users',document.id),{
            name:name
        })
    })
    



}




export  const   handleVerifyEmail=()=>{
    // const   auth=getAuth()
    // applyActionCode(auth).then((res)=>{
    //     console.log('email verified')
    // })

 

}

export  const   updateCompleted=(uid,id)=>{
    const       userDetails=findUserFromId(uid)
        onSnapshot(userDetails,(snaps)=>{
snaps.forEach(async(snap)=>{
    console.log(snap.data())
    await   updateDoc(doc(db,'users',snap.id),{
        completed:arrayUnion({id:id})
    })
})
          
        })
}


