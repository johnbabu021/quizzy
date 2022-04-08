import { useEffect } from "react";

export      default function    DocumentTitle(data){
    useEffect(()=>{
document.title=String(data)
    },[])
}