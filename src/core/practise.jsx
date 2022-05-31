import { useEffect } from "react"

export      default function    Practise(){
    useEffect(()=>{
  if(typeof window==='object'){

 
  const       input={value:Math.ceil(Math.random()*10)}
          const       identi=document.querySelector('.bar')
          const       cont=document.querySelector('.cont')
          // console.log(identi)
  
          const   r=identi.getAttribute('r')
          const       c=Math.PI*(r*2)
          const       pcr=((100-Number(input.value))/100)*c
          identi.style.strokeDashoffset=pcr
          cont.setAttribute('data-pct',Number(input.value))
        }
  },[])

    return  (
        <div    style={{
            display:'grid',
            placeItems:'center'
        }}>

<div    className="cont" data-pct='100'>
<svg className="svg" width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle r="90" cx="100" cy="100" fill="transparent"  ></circle>
  <circle className="bar" r="90" cx="100" cy="100" fill="transparent"  strokeLinecap="round" strokeDasharray="565.48" >
 
  </circle>

</svg>
    </div>

         </div>
    )
}