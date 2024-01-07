import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const releaseToken=()=>{
    sessionStorage.removeItem('userToken');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'green'}} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:'white'}}>
            Employee App
          </Typography>
          <Button color="inherit"><Link to={'/addemployee'} style={{textDecoration:'none', color:'white'}} > Add Employee</Link></Button>
          <Button color="inherit"><Link to={'/employees'} style={{textDecoration:'none', color:'white'}} >Employees</Link></Button>
          <Button color="inherit"><Link to={'/profile'} style={{textDecoration:'none', color:'white'}} >Profile</Link></Button>
          <Button color="inherit"><Link to={'/'} style={{textDecoration:'none', color:'white'}} onClick={releaseToken} >Logout</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
  

export default Navbar