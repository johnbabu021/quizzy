import  {createContext, useReducer} from 'react'

export  const   UserDetails=createContext(null)


export  default function    UserContext({children}){
    const   initialState={
        user:null,
        alert:'adsf'             
    
    }
    const   reducer=(state,action)=>{
        switch(action.type){
            case 'login': return    {user:action.user}
            case    'logout':return {user:null}
            case    'alert':return   {alert:action.alert}
            default :return state
        }
    }
    const   [state,dispatch]=useReducer(reducer,initialState)
return(
    <UserDetails.Provider   value={{state,dispatch}}>
        {children}
    </UserDetails.Provider>
)
}

