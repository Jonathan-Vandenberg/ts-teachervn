import HomeWorkIcon from '@mui/icons-material/HomeWork';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import * as React from 'react';
import SchoolIcon from '@mui/icons-material/School';


export default function DenseAppBar() {
  const router = useRouter()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
            <IconButton onClick={()=>{router.push('/new-accomodation')}}
            edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
            ><SchoolIcon/>
          
          </IconButton>
            <IconButton onClick={()=>{router.push('/accomodation')}}
            edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
            ><HomeWorkIcon/>
          </IconButton>
          
          <Typography variant="h6" color="inherit" component="div">
            
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
