import './App.css';

import { Routes, Route } from "react-router-dom";
import routes from './constants/routes/routes';
import { useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { UserDetails } from './context/usercontext';
import { db } from './constants/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { Toaster } from 'react-hot-toast';
// import Sidebar from './components/sidebar/sidebar';
/*
done---useeffect 56 dispatch added--missing dependencies
*/
function App() {
  const {state:{user,alert},dispatch}=useContext(UserDetails)
  console.log(alert)
  useEffect(()=>{
                  async function    initialize(){
                    const auth=getAuth();
                    onAuthStateChanged(auth,(user)=>{
                      if(user){
                        dispatch({type:'login',user:user})
                          localStorage.setItem('user',JSON.stringify(user))

                        
                      }
                      else{
                        console.log('asdf')
                      }
                    })
                  if(user){
                    console.log(user)
                    const   querySnapShot=await getDocs(collection(db,"users"))
                    querySnapShot.forEach(async(doc)=>{
                      if(doc.data().email===user.email){
console.log('alreay a user')
                      }
                      else{
                      try{
                        const docRef=await    addDoc(collection(db,"users"),{
                          name:user.displayName,
                          email:user.email,
                          image:user.photoURL,
                          uid:user.uid
                        })
                        console.log('docRef is',docRef.id)
                      }
                      catch(e){
                        console.log(e)
                      }
                      }
                    })
                  }
                  }
              initialize()
  }
    ,[user,dispatch])

useEffect(()=>{
const   userDetails=localStorage.getItem('user')
if(userDetails){
  dispatch({type:'login',user:JSON.parse(userDetails)})
}
},[])

  return (
    <div className="App">
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
