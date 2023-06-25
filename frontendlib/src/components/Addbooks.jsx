import { Button, IconButton, Table, TableCell, TableContainer, TableRow, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addbooks = (props) => {
  var navigate = useNavigate();
   var[inp,setInp]=useState(props.data);
   console.log(props.data)
   console.log(props.method)

  const inputhandler=(e)=>
  {
  const {name,value}= e.target;
    setInp((inp)=>({...inp,[name]:value}));

  }
    const addbook=()=>
    {
      if(props.method==="post")
      {
        axios.post("http://localhost:3008/addbooks",inp)
        .then(()=>{
             alert("new book added successfully");
             navigate('/view')
            })
            .catch(err=>{
              console.log(err)
            })
      }

      if(props.method==="put")
      {
        axios.put("http://localhost:3008/editbooks/"+inp._id,inp)
        .then(()=>{
             alert("book updated successfully");
             window.location.reload(false)
            })
            .catch(err=>{
              console.log(err)
            })
      }

  }
   
  return (
    <div style={{paddingTop:'150px'}}>
      
        <TableContainer>
            <Table className='addtable' style={{backgroundColor:'black',width:'50%',marginLeft: 'auto',marginRight:'auto',marginBottom:'100px',borderRadius:'20px'}}>
          
                  <TableRow>
                    <TableCell style={{color:'#2e1001',border:'black',fontFamily:'fantacy',fontSize:'20px'}}>BOOK NAME</TableCell>
                    <TableCell style={{border:'black'}}><TextField variant='outlined' name='bookname' value={inp.bookname} onChange={inputhandler} style={{backgroundColor:'white',width:'100%',borderRadius:'10px'}}/></TableCell>
                  </TableRow>  
                  <TableRow>
                    <TableCell  style={{color:'#2e1001',border:'black',fontFamily:'fantacy',fontSize:'20px'}}>AUTHOR</TableCell>
                    <TableCell style={{border:'black'}}><TextField variant='outlined' name='author' value={inp.author}  onChange={inputhandler} style={{backgroundColor:'white',width:'100%',borderRadius:'10px'}}/></TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell  style={{color:'#2e1001',border:'black',fontFamily:'fantacy',fontSize:'20px'}}>LANGUAGE</TableCell>
                    <TableCell style={{border:'black'}}><TextField variant='outlined' name='language' value={inp.language} onChange={inputhandler} style={{backgroundColor:'white',width:'100%',borderRadius:'10px'}}/></TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell  style={{color:'#2e1001',border:'black',fontFamily:'fantacy',fontSize:'20px'}}>GENRE</TableCell>
                    <TableCell style={{border:'black'}}><TextField variant='outlined' name='genre' value={inp.genre}  onChange={inputhandler} style={{backgroundColor:'white',width:'100%',borderRadius:'10px'}}/></TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell  style={{color:'#2e1001',border:'black',fontFamily:'fantacy',fontSize:'20px'}}>BOOK NUMBER</TableCell>
                    <TableCell style={{border:'black'}}><TextField variant='outlined' name='booknum' value={inp.booknum}  onChange={inputhandler} style={{backgroundColor:'white',width:'100%',borderRadius:'10px'}}/></TableCell>
                  </TableRow> 
                  
                  
                  <TableRow>
                    <TableCell style={{border:'black'}}></TableCell>
                    <TableCell style={{border:'black'}}>
                    <Button variant='contained' onClick={addbook} style={{color:'white',backgroundColor:'#2e1001',width:'100%',height:'50px',borderRadius:'10px'}}>
                    <Tooltip title='Add/Update Book'>
                            <IconButton>
                            <AddSharpIcon style={{fontSize:'40px',color:'rgb(184, 182, 182)'}}/>
                            </IconButton>
                        </Tooltip>
                    </Button>
                    </TableCell>
                  </TableRow>
              
             
            </Table>
        </TableContainer>
    </div>
  )
}

export default Addbooks