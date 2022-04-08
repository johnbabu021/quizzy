import Create from "../../core/create";
import CreateForm from "../../core/form";
import Home from "../../pages/home";
import InitailFunction from "../../pages/initalPage";
import PlayGround from "../../pages/playGround";
import  * as ROUTES from './names.js'
import  Report from '../../pages/reports'
import ReportId from "../../pages/reportId";
import MyLibrary from "../../pages/myLibrary";
import Join from "../../pages/join";
import Profile from "../../core/profile";

 const       routes=[
 
    {
path:'/',
element:<InitailFunction/>
    },
    {
        path:"/dashboard",
        element:<Home/>
    },
    {
        path:ROUTES.PLAYGROUND,
        element:<PlayGround/>
    },
    {
        path:ROUTES.CREATE,
        element:<Create/>
    },
    {
        path:ROUTES.CREATEFORM,
        element:<CreateForm/>
    },{
        path:ROUTES.REPORTS,
        element:<Report/>
    },{
        path:ROUTES.REPORTID,
        element:<ReportId/>
    },
    {
        path:ROUTES.MYLIBRARY,
        element:<MyLibrary/>
    },
    {
        path:ROUTES.JOIN,
        element:<Join/>
    },
    {
        path:ROUTES.PROFILE,
        element:<Profile/>
    }
]

export  default routes