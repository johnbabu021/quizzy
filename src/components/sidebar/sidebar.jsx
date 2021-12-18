import  '../../styles/home/sidebar/sidebar.css'
import  {sidebar}   from    '../../constants/sidebar/main'
export  default     function        Sidebar(){
    return(
        <div    className="main__sidebar">
           {
               sidebar.map(({name,Icon})=>(<p onClick={(e)=>console.log(e.target.getAttribute('border'))}  key={name}>{Icon&&<Icon/>}{name}</p>))
           }
        </div>
    )
}