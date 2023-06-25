import { AppBar, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { NavLink} from 'react-router-dom'
import '../components/style.css'
import PlaylistAddSharpIcon from '@mui/icons-material/PlaylistAddSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import TableViewSharpIcon from '@mui/icons-material/TableViewSharp';

const Navbar = () => {
 
  return (
    <div>
        <AppBar className='nav'>
            <Toolbar>
                <Typography variant='h4' style={{fontFamily:'fantacy',color:'#2e1001'}}>Library App</Typography>


                <Button><NavLink to={'/'}>
                    <Tooltip title='Home'>
                      <IconButton >
                      <HomeSharpIcon  style={{fontSize:'40px',color:'#2e1001'}} />
                      </IconButton>
                    </Tooltip>
                </NavLink></Button>

                <Button><NavLink to={'/add'}>
                  <Tooltip title='Add Book'>
                    <IconButton>
                    <PlaylistAddSharpIcon style={{fontSize:'40px',color:'#2e1001'}}/>
                    </IconButton>
                  </Tooltip>
                  </NavLink></Button>

                <Button><NavLink to={'/view'}>
                <Tooltip title='View Books'>
                    <IconButton>
                    <TableViewSharpIcon style={{fontSize:'40px',color:'#2e1001'}}/>
                    </IconButton>
                  </Tooltip>
                  </NavLink></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar