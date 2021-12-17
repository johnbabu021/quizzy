import { useNavigate } from 'react-router-dom'
import  '../../styles/home/content.css'


export  default     function    Content(){
    const   navigator=useNavigate()
    return(

        <div    className="main__content">

<div    className="flex__item">
<div>
    Join A Game
</div>
<div    onClick={()=>navigator('/playground')}>   
    PlayGround
</div>
<div>
    Add a Game
</div>

</div>
        </div>
    )
}