import './App.css';

import { Routes, Route } from "react-router-dom";
import routes from './constants/routes/routes';
import { useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { UserDetails } from './context/usercontext';
import { db } from './constants/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { ConnectingAirportsOutlined } from '@mui/icons-material';
import { Toaster } from 'react-hot-toast';

function App() {
  const {state:{user},dispatch}=useContext(UserDetails)
  useEffect(()=>{
                  async function    initialize(){
                    const auth=getAuth();
                    onAuthStateChanged(auth,(user)=>{
                      if(user){
                        dispatch({type:'login',user:user})
                      

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
    ,[user])
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
