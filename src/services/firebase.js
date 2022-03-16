import { collection, doc, onSnapshot, query, where } from "firebase/firestore"
import { useState } from "react"
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