import { useEffect, useState } from "react"
import Header from "../components/home/header"
import Loading from "../components/loader/Loading"
import Sidebar from "../components/sidebar/sidebar"
// import generateApi from "../hooks/playgroundApi"
import  '../styles/home/teacherContent/home.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import  '../styles/playground/home.css'
import callApi from "../utils/callApi"
import MajorQuiz from "./majorquiz"
export  default function    PlayGround(){
    const   [item,setItem]=useState([])
    const   [like,setLike]=useState(false)
    const   [category,setCategroy]=useState(undefined)
    const   [count,setCount]=useState([])
    // console.log(category)
    console.log(count)
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
    <div>
<Header/>
    <div    className="teacher__component">


<div    className="teacher__sidebar">
<Sidebar/>
</div>
<div className="teacher__contents">
{
    show&&(<div    className={`${item.length!==0&&'playground__container'}`}>
    {item.length!==0?
    item.map(item=>(<div className="item_container"    data-aos="zoom-in"   key={item.id}
   
    
    
    >
        <p  className="item__name">{item.name}</p>
<div    className="question__settings">
<p>question count</p>
<div    className="question__count__cont">
<div    className="que__pulse"  onClick={
()=>{
    if(count?.find((data)=>data?.item===item.id)?.count)
    console.log(count.indexOf(count?.find((data)=>data?.item===item.id)),'asdf')
  setCount(count=>(  count.indexOf(count.find((data)=>data.item===item.id))!==-1?
    count.splice(count.indexOf(count.find((data)=>data.item===item.id)),1,
    {item:item.id,
    count:Number(count.find(sele=>sele.item===item.id).count)-1

}):
[...count,{item:item.id,count:9}]

))



}


}>
-
</div>
<div    className="que__count">
    {(count.length>1&&count.find((data)=>data.item===item.id))?count.find((data)=>data.item===item.id).count:10}
    </div>

    <div    className="que__pulse"  onClick={()=>setCount({item:item.id,count:count+1})}>
        +
        </div>
    </div>
    </div>
      
 <div   className="btn__pra"    >
        
    <button   onClick={()=>playGroundEvent.onClick(item.id)} className="pra__btn">Take it</button>
   <button  className="like__btn"   onClick={()=>setLike(!like)}>{like?<FavoriteIcon/>:<FavoriteBorderIcon/>}</button>
     </div>
   
    </div>)):<Loading/>}
    </div>)
}

 {typeof    category!=='undefined'&&( <MajorQuiz item={category}/>)  
}
</div>



    </div>
    </div>

)

}