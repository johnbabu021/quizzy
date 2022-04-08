import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/home/header";
import Sidebar from "../components/sidebar/sidebar";
import  '../styles/home/teacherContent/home.css'
import  {UserDetails} from '../context/usercontext'
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../constants/firebase";
import  '../styles/singleReportId.css'
export  default function    ReportId(){

    const   {id}=useParams()
    const   {state:{user}}=useContext(UserDetails)
    const       [completedDetails,setCompletedDetails]=useState([])
console.log(completedDetails)
    useEffect(()=>{
        if(user){

            onSnapshot(doc(db,'created',id),(snapShot)=>{
                if(snapShot.data().completed.length>=0){
                    snapShot.data().completed.forEach(({id:dataConverter,score})=>{
                        const  q=   query(collection(db,'users'),where('uid','==',dataConverter))
console.log(dataConverter)
                               onSnapshot(q,(userDetails)=>{
                                //   userDetails.forEach((item)=>    console.log(item.data()))
                            userDetails.forEach((singleUser)=>{
                                        setCompletedDetails(singleItem=>[...singleItem,{user:singleUser.data().name,photoURL:singleUser.data().image,score}])

                            })
                        })
                    })

                }

            })

        }
    },[user])



      
      
    return(
        <div   className="div__main" >
<Header/>
<div    className="teacher__component">

<div    className="teacher__sidebar">
<Sidebar/>
</div>

<div className="teacher__contents">
{completedDetails.length!==0?
    <TableContainer component={Paper}>
        <Table sx={{minWidth:650}} aria-label="simple table">
           {completedDetails.length!==0&& <TableHead>
                <TableRow>
                    <TableCell>participant</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Score</TableCell>

                </TableRow>
            </TableHead>}
           <TableBody>
               {completedDetails?.map((item,index)=>{
                   return(
                       <TableRow key={index}                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                       >
                <TableCell>{item.user}</TableCell>
                <TableCell><img src={item.photoURL}/></TableCell>
                <TableCell>{item.score}</TableCell>
                {/* <TableCell>{item.bike}</TableCell> */}

                       </TableRow>
                   )
               })}
            </TableBody>
        </Table>
    </TableContainer>
    :<div   className="no__one">No One has participated</div>
}
</div>
</div>

        </div>
    )
}