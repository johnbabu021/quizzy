import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


export  const   sidebar=[
    {name:"Dashboard",Icon:ExploreOutlinedIcon,direct:'/dashboard'},
    {name:"My Library",Icon:LocalLibraryOutlinedIcon,direct:'/mylibrary'},
    {name:"Reports",Icon:AssessmentOutlinedIcon,direct:'/reports'},
    {name:"Practise",Icon:SchoolOutlinedIcon,direct:'/playground'},
    // {name:"Settings",Icon:SettingsOutlinedIcon,direct:'/settings'},
]

export  const       minisideBar=[
    {name:'practise'},
    {name:'bookmark'},
    {name:'completed'},
    // {name:'status'},
    {name:'participated'},
    // {name:'class'}
]