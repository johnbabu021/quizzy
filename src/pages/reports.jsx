import Header from '../components/home/header'
import Sidebar from '../components/sidebar/sidebar'
import  '../styles/report.css'
import  '../styles/home/teacherContent/home.css'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { db } from '../constants/firebase'
import { UserDetails } from '../context/usercontext'
import {  collection, doc, onSnapshot, query, where } from 'firebase/firestore'


export      default function    Report(){
  const {state:{user}}=useContext(UserDetails)
    const       navigate=useNavigate()
    const   [created,setCreated]=useState([])


useEffect(()=>{
 if(user)
 { async function  initial(){
  Promise.all([ 
    onSnapshot(query(collection(db,'users'),where('uid','==',user?.uid)),(selectedItems)=>{
    selectedItems.forEach(async(mappingUser)=>{
      onSnapshot(doc(db,'users',mappingUser.id),(wholeItem)=>{
        wholeItem.data().created.map(({id})=>{
          onSnapshot(doc(db,'created',id),(createdSingle)=>{
            setCreated((data)=>[...data,{createdData:createdSingle.data(),id}])
          })
        })
      })
    })
  
  }),

  


])  


  }
  initial()}
},[user])

    //use this in single reports
    //create a 'created' array in users
//     useEffect(()=>{
// if(user)
// {
//   onSnapshot(query(collection(db,'users'),where('uid','==',user?.uid)),(doc)=>{
// doc.forEach((item)=>{
//   console.log(item.data().participated)
// })

//   })
// }


//     },[user])

    return(
       <div>
           <div>
           <Header/>

           </div>
           <div    className='teacer__component'>
<div    className='teacher__sidebar'>
<Sidebar/>

</div>

           {/* <div className='teacher__cotents'> */}
           <div className='main__div'   >
{
  created.map((item,index)=>(
    <div  key={index} className='pricing pricing-palden'>
    <div className='pricing-item'>
      <div className='pricing-deco'>
        <svg className='pricing-deco-img'>
          <path className='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
          <path className='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
          <path className='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
          <path className='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
        </svg>
        {/* <div className='pricing-price'><span className='pricing-currency'>$</span>29
          <span className='pricing-period'>/ mo</span>
        </div> */}
        <h3 className='pricing-title'>{item.createdData.name}</h3>
      </div>
      <ul className='pricing-feature-list'>
        {/* <li className='pricing-feature'>2 persons attended</li>
        <li className='pricing-feature'>1 scored all marks</li> */}
        <li className='pricing-feature'>{item.createdData.name}</li>
      </ul>
      <button className='pricing-action'
      onClick={()=>{
          navigate(`/reports/${item.id}`)
      }}
      >Choose plan</button>
    </div>
  
  </div>
  ))
}
       
       

        


      </div >
               </div> 
        </div>
    //    </div>
      
    )
}