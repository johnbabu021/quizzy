import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


export  const   sidebar=[
    {name:"Explore",Icon:ExploreOutlinedIcon,direct:'/dashboard'},
    {name:"My Library",Icon:LocalLibraryOutlinedIcon,direct:'/mylibrary'},
    {name:"Reports",Icon:AssessmentOutlinedIcon,direct:'/reports'},
    {name:"Practise",Icon:SchoolOutlinedIcon,direct:'/playground'},
    {name:"Settings",Icon:SettingsOutlinedIcon,direct:'/settings'},
]