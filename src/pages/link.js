import      React,{useState} from 'react'


const       STATUS={
    HOVER:'hovered',
    NORMAL:'normal'
}

export  default Link=({props,children})=>{
const   [state,setState]=useState(STATUS)

const onMouseEnter=()=>{
    setState(STATUS.HOVER)
}

const   onMouseLeave=()=>{
    setState(STATUS.NORMAL)
}

return  (
    <a  className={state} 
    href={props}   
    onMouseEnter={onMouseEnter}
     onMouseLeave={onMouseLeave}
     >{children}</a>
)


}