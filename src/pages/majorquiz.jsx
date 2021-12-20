import Checkbox from "antd/lib/checkbox/Checkbox"
// import { useEffect } from "react"
import  '../styles/playground/item/home.css'
import { Button } from 'antd';
import  '../styles/login/home.css'
import Loading from "../components/loader/Loading";
export  default   function  MajorQuiz({item:{results}}){
    function myFun(checkbox) {
        var checkboxes = document.getElementsByName('game')
    console.log(checkboxes[0].checked)
        checkboxes.forEach((item) => {
            
          if (item.checked ===true) 
            item.checked =  true
        })
    }

    const   unicodes=[{
        string:'&#039;',
        code:'\u0027'
    },{
        string:'&quot;',
        code:'\u0027'
    }]
    // setInterval(()=>{
    //     results.unshift()
    // })
    
    const   newItem=
    
    results.map(item=>{
if(item.question.includes('&')){

    return  unicodes.map(({string,code})=>{
        let modified
        if(item.question.includes(string))
            modified=  item.question.replaceAll(string,code)
        else
        return  null
        return  modified
    })
}
else{
    return  item.question

}
})

const   resultItem=
    
    results.map(item=>{
return  item.incorrect_answers.map(data=>{

   if(data.includes('&')){
    return  unicodes.map(({string,code})=>{
        let modified
        if(data.includes(string))
            modified=  data.replaceAll(string,code)
        else
        return  null
        return  modified
    })
   }
   else
   return   data
})
})


    return(

        <div    className="major__quiz">
    <div    className="quiz__elements">
    {resultItem.length!==0?(
       <div className="answers">

           <p>{newItem[0]}</p>
            <p><Checkbox    for="answers"   value="1"   name="game" onClick={()=>myFun(this)}/> {results[0].correct_answer}</p>
           <p><Checkbox for="answers"   value="1"   name="game" onClick={()=>myFun(this)}/>{resultItem[0][0]}</p>
          <p><Checkbox  for="answers"   value="1"   name="game" onClick={()=>myFun(this)}/>{resultItem[0][1]}</p>
      <p> <Checkbox for="answers"   value="1"   name="game" onClick={()=>myFun(this)}/>{resultItem[0][2]}</p>

           </div>
    ):<Loading/>}
   <Button  className="login_btn">Submit</Button>
    </div>
        </div>
    )
}   