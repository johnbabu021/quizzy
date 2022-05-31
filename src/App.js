import './App.css';
/*
Todo-----
dashboard dispatch event on refresh
didn't change
*/

// else{
//   try{
//    ///please fix the bug  appearing here
// await    addDoc(collection(db,"users"),{
//       name:user.displayName,
//       email:user.email,
//       image:user.photoURL,
//       uid:user.uid,
//       verified:false
//     })
//    console.table('this is not a stable condition')
    
//     // console.log('docRef is',docRef.id)
//   }
//   catch(e){
//     console.log(e)
//   }
//   }

import { Routes, Route } from "react-router-dom";
import routes from './constants/routes/routes';
import { useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { UserDetails } from './context/usercontext';
import { db } from './constants/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { Toaster } from 'react-hot-toast';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import MiniHeader from './components/home/miniHeader';
Aos.init()
// // import Sidebar from './components/sidebar/sidebar';
/*
done---useeffect 56 dispatch added--missing dependencies
*/
function App() {
  const {state:{user,pop},dispatch}=useContext(UserDetails)
  // console.log(alert)
  useEffect(()=>{
                  async function    initialize(){
                    const auth=getAuth();

                    onAuthStateChanged(auth,async(user)=>{
                      if(user){
                        dispatch({type:'login',user:user})
                          localStorage.setItem('user',JSON.stringify(user))
                        const   existinguser=localStorage.getItem('userDocId')
                        console.log('existing user is here')
if(!JSON.parse(existinguser)){
  const   docRef=await    addDoc(collection(db,"users"),{
    name:user.displayName,
    email:user.email,
    image:user.photoURL,
    uid:user.uid,
    pracitse:[],
    verified:false
  })
  localStorage.setItem('userDocId',docRef.id)
}                       
                      }
                   
                    })
               
                  }
              initialize()
  }
    ,[])

useEffect(()=>{
const   userDetails=localStorage.getItem('user')
if(userDetails){
  dispatch({type:'login',user:JSON.parse(userDetails)})
}
},[dispatch])

  return (
    <div className="App">
      {
        pop&&<MiniHeader/>
      }
      <Routes>
      {routes.map(item=>(
        <Route  {...item} key={item.path}/>
      ))}
      </Routes>
      <Toaster
position="top-right"/>
    </div>
  );
}

export default App;
