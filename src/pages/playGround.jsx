import { useEffect, useState } from "react"
import Header from "../components/home/header"
import Loading from "../components/loader/Loading"
// import generateApi from "../hooks/playgroundApi"
import  '../styles/playground/home.css'
import callApi from "../utils/callApi"
import MajorQuiz from "./majorquiz"
export  default function    PlayGround(){
    const   [item,setItem]=useState([])
    const   [category,setCategroy]=useState(undefined)
    const   [show,setShow]=useState(true)
useEffect(()=>{
        async function   fetchData(){
            const   res=    await   callApi('https://opentdb.com/api_category.php')
            setItem(res.trivia_categories)
         }
fetchData()
},[])


    const   playGroundEvent={
       onClick:async(id)=> {
   
    const   res=await   callApi(`https://opentdb.com/api.php?amount=10&category=${id}`)
    if(typeof   res!=='undefined'){
        setShow(false)
        setCategroy(res)
    }
    }
   }
return(
    <div    className="playground__main">
<Header/>

{
    show&&(<div    className={`${item.length!==0&&'playground__container'}`}>
    {item.length!==0?
    item.map(item=>(<div className="item_container"       key={item.id}
    onClick={()=>playGroundEvent.onClick(item.id)}
    
    
    >{item.name}</div>)):<Loading/>}
    </div>)
}

 {typeof    category!=='undefined'&&( <MajorQuiz item={category}/>)  
}

    </div>
    
)

}