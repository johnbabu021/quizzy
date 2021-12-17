import { useEffect, useState } from "react"
import Header from "../components/home/header"
// import generateApi from "../hooks/playgroundApi"
import  '../styles/playground/home.css'
import MajorQuiz from "./majorquiz"
export  default function    PlayGround(){
    const   [item,setItem]=useState([])
    const   [category,setCategroy]=useState([])
    const   [show,setShow]=useState(true)
useEffect(()=>{
    fetch('https://opentdb.com/api_category.php').then(res=>
{
return  res.json()
}).then(item=>{
    setItem(item.trivia_categories)
})
.catch(err=>
    console.warn(err))


})


    const   playGroundEvent={
       onClick:(id)=> {
        fetch(`https://opentdb.com/api.php?amount=10&category=${id}`)
        .then((item)=>{
            setShow(false)
            return     item.json()
        })
        .then((item)=>{
     setCategroy(item)
        }).catch((err)=>{
            console.log(err)
        })
    }
   }
return(
    <div    className="playground__main">
<Header/>

{
    show&&(<div    className="playground__container">
    {item?.map(item=>(<div className="item_container"       key={item.id}
    onClick={()=>playGroundEvent.onClick(item.id)}
    
    
    >{item.name}</div>))}
    </div>)
}

 {category.length!==0&&( <MajorQuiz item={category}/>)  
}

    </div>
    
)

}