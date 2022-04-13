import { useEffect } from "react";

export      default function    DocumentTitle(data){
    useEffect(()=>{
document.title=String(data)
    },[data])
}


/*
todo----title content on change
*/