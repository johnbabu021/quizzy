import Home from "../../pages/home";
import Login from "../../pages/login";
import PlayGround from "../../pages/playGround";
import SignUp from "../../pages/signup";
import  * as ROUTES from './names.js'


 const       routes=[
    {
        path:ROUTES.LOGIN,
        element:<Login/>
    },
    {
        path:ROUTES.SIGNUP,
        element:<SignUp/>
    },
    {
        path:"/",
        element:<Home/>
    },
    {
        path:ROUTES.PLAYGROUND,
        element:<PlayGround/>
    }
]

export  default routes