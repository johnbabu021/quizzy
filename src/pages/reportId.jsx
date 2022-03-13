import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Header from "../components/home/header";
import Sidebar from "../components/sidebar/sidebar";
import  '../styles/home/teacherContent/home.css'
export  default function    ReportId(){
    function createData(name, id, data, car, bike) {
        return { name, id, data, car, bike };
      }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
      
      
    return(
        <div   className="div__main" >
<Header/>
<div    className="teacher__component">

<div    className="teacher__sidebar">
<Sidebar/>
</div>

<div className="teacher__contents">

    <TableContainer component={Paper}>
        <Table sx={{minWidth:650}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>participant</TableCell>
                    <TableCell>participant</TableCell>
                    <TableCell>participant</TableCell>
                    <TableCell>participant</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((item,index)=>{
                   return(
                       <TableRow key={index}                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                       >
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.car}</TableCell>
                <TableCell>{item.bike}</TableCell>

                       </TableRow>
                   )
               })}
            </TableBody>
        </Table>
    </TableContainer>
</div>
</div>

        </div>
    )
}