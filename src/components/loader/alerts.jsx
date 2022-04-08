import { useContext } from "react"
import { UserDetails } from "../../context/usercontext"

export  default function    AlertFunc(){

const   {state:{alert},dispatch}=useContext(UserDetails)
    return  (
        <div    style={{
            height:'100vh',
            width:'100vw',
            position:'fixed',
            top:'0',
            left:'0',
            display:'grid',
            placeItems:'center',
            background:'red'
        }}>
<div>
    jkjdi
    <h1 style={{color:'red'}}>hello this is alert</h1>
</div>
            </div>
    )
}