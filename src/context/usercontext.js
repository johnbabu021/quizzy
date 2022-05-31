import  {createContext, useReducer} from 'react'

export  const   UserDetails=createContext(null)


export  default function    UserContext({children}){
    const   initialState={
        user:localStorage.getItem('user'),
        alert:'adsf',
        pop:false   ,
        click:'Dashboard',
        pathName:null      
    
    }
    const   reducer=(state,action)=>{
        switch(action.type){
            case 'login': return    {...state,user:action.user}
            case    'logout':return {...state,user:null}
            case    'alert':return   {...state,alert:action.alert}
            case    'ham-pop':
            // console.log(state.pop)    
            return    {...state,pop:action.pop}
            case 'sidebar':return   {...state,click:action.click}
            default :return state
            case    'innerWidth':return     {...state,width:action.width}
            case    'location':return   {...state,pathName:action.pathName}
        }
    }
    const   [state,dispatch]=useReducer(reducer,initialState)
return(
    <UserDetails.Provider   value={{state,dispatch}}>
        {children}
    </UserDetails.Provider>
)
}

