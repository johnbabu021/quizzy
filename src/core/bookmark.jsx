import { doc, onSnapshot } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { db } from "../constants/firebase"
import { UserDetails } from "../context/usercontext"
import {  findUserFromId } from "../services/firebase"
import  '../styles/bookmark.css'
export      default function    BookMark(){
    const   {state:{user}}=useContext(UserDetails)
    const   [bookMark,setBookMark]=useState([])
    console.log(bookMark)
    useEffect(()=>{
if(user){
    const        userContent= findUserFromId(user?.uid)
    onSnapshot(userContent,(wholeSnap)=>{
     wholeSnap.forEach((singleSnap)=>{
         let        book=[]
           book.push(singleSnap.data()?.bookmark)
      book?.map((item)=>{
         return item.map((singleData)=>{
           return onSnapshot(doc(db,'singles',singleData.id),(singles)=>{
                setBookMark((book)=>[...book,singles.data()])
            })
          })
       
            })
     })
 })
}
    },[user])

    return(
        <div    style={{
            display:'flex',
            gap:'2em',
            paddingTop:'2em',
            flexWrap:'wrap'
}}>
            
            {
              bookMark.length!==0&&
                bookMark?.map((item,index)=>{

return(      <div className="single__book" key={index}>
    <h1>{item.name}</h1>
    <button className="book__btn">Get it</button>
    </div>
                       )
                 
                })
            }
        </div>
    )
}