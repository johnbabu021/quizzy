import Checkbox from "antd/lib/checkbox/Checkbox"
// import { useEffect } from "react"
import  '../styles/playground/item/home.css'
import { Button } from 'antd';
import  '../styles/login/home.css'
export  default   function  MajorQuiz({item:{results}}){

    function myFun(checkbox) {
        var checkboxes = document.getElementsByName('game')
    console.log(checkboxes[0].checked)
        checkboxes.forEach((item) => {
            
          if (item.checked ===true) 
            item.checked =  true
        })
    }
    // setInterval(()=>{
    //     results.unshift()
    // })
    return(

        <div    className="major__quiz">
    <div    className="quiz__elements">
    {results.length!==0&&(
       <div className="answers"> <p>{results[0].question}</p>
            <p><Checkbox    for="answers"   value="1"   name="game" onClick={()=>myFun(this)}/> {results[0].correct_answer}</p>
           <p><Checkbox for="answers"   value="1"   name="game" onClick={()=>myFun(this)}/>{results[0].incorrect_answers[0]}</p>
          <p><Checkbox  for="answers"   value="1"   name="game" onClick={()=>myFun(this)}/>{results[0].incorrect_answers[1]}</p>
      <p> <Checkbox for="answers"   value="1"   name="game" onClick={()=>myFun(this)}/>{results[0].incorrect_answers[2]}</p>

           </div>
    )}
   <Button  className="login_btn">Submit</Button>
    </div>
        </div>
    )
}   