import { Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import axios from 'axios';
import Addbooks from './Addbooks';

const Viewbooks = () => {
  const[books,setbooks]=useState([]);
  const[update,setUpdate]=useState(false);
  const [singlevalue,setSinglevalue]=useState([])

 useEffect(()=>{
  axios.get("http://localhost:3008/viewbooks")
  .then((response)=>{
 
    console.log(response.data);
    setbooks(response.data);
  })
 },[]);


 const editbook=(value)=>{
console.log("clicked")
setUpdate(true);
setSinglevalue(value);
 }

 const deletebook=(id)=>{
  axios.delete("http://localhost:3008/deletebooks/"+id)
  .then((res)=>{
    alert(" book deleted successfully");
    window.location.reload(false);
   
   })
   .catch(err=>{
     console.log(err)
   })
  console.log(id);
 }

 var finalJSX = <TableContainer style={{paddingTop:'150px'}}>
 <Table className='booktable' style={{width:'80%',marginLeft: 'auto',marginRight:'auto',marginBottom:'600px',borderRadius:'20px'}}>
   <TableHead>
     <TableRow>
       <TableCell style={{border:'black',fontSize:'20px',fontWeight:'30px',color:'#2e1001'}}>BOOK NAME</TableCell>
       <TableCell style={{border:'black',fontSize:'20px',fontWeight:'30px',color:'#2e1001'}}>AUTHOR</TableCell>
       <TableCell style={{border:'black',fontSize:'20px',fontWeight:'30px',color:'#2e1001'}}>LANGUAGE</TableCell>
       <TableCell style={{border:'black',fontSize:'20px',fontWeight:'30px',color:'#2e1001'}}>GENRE</TableCell>
       <TableCell style={{border:'black',fontSize:'20px',fontWeight:'30px',color:'#2e1001'}}>BOOK NUMBER</TableCell>

     </TableRow>
   </TableHead>
   <TableBody>
   {books.map((val,index)=>{
                                   return(
                                       <TableRow key={index}>
                                           <TableCell>{val.bookname}</TableCell>
                                           <TableCell>{val.author}</TableCell>
                                           <TableCell>{val.language}</TableCell>
                                           <TableCell>{val.genre}</TableCell>
                                           <TableCell>{val.booknum}</TableCell>
                                           <TableCell style={{border:'black'}}>
                   <Button variant='contained' style={{backgroundColor:'#F0D5B3'}} onClick={()=>editbook(val)}>
                   <Tooltip title='Edit'>
                       <IconButton>
                       <EditSharpIcon style={{fontSize:'20px',color:'#2e1001'}}/>
                       </IconButton>
                   </Tooltip>
                   </Button>
               </TableCell>

               <TableCell  style={{border:'black'}}>
                   <Button variant='contained' style={{backgroundColor:'#EB9F42'}} onClick={()=>deletebook(val._id)}>
                   <Tooltip title='Delete'>
                       <IconButton>
                       <DeleteSharpIcon style={{fontSize:'20px',color:'#2e1001'}}/>
                       </IconButton>
                   </Tooltip>
                   </Button>
               </TableCell>

                                       </TableRow>
                                   )
                               })}
  
   </TableBody>
 </Table>
</TableContainer>
if(update) finalJSX = <Addbooks data={singlevalue} method='put'/>
return finalJSX;
  // return (
  //   <div style={{paddingTop:'100px'}}>
  //   <Typography variant='h4' style={{fontWeight:'30px',fontFamily:'fantacy',color:'#2e1001'}}><b> BOOKS LIST</b></Typography>
  //   <br /><br />
    
  //   </div>
  // )
};

export default Viewbooks