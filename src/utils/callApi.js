export  default async function    callApi(url,headers={}){

let   apiurl=await   fetch(url)
.then((res)=>res.json())
.then((result)=>result)
.catch((err)=>
   {
    // console.log(err)   
    throw    new Error(err,"Internal   server   error")
})
    return  apiurl

}