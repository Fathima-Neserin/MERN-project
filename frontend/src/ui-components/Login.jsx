import React, { useState } from 'react'
import '../App.css'
import { Button, Grid,  TextField,  Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import axiosInstance from '../axiosinterceptor'


const Login = () => {
  const navigate=useNavigate();
  const [user,setUser]=useState({
    email:'',
    password:''
  })
const addHandler =()=>{
      axiosInstance.post('http://localhost:4000/user/login',user).then((res)=>{
        alert(res.data.message);
        if(res.data.token){
          sessionStorage.setItem('userToken',res.data.token);
          navigate('/employees');
        }
      })
}
  return (
    <div style={{margin:'8%'}} className='App'>
    <Typography variant='h3' style={{ color:'green',margin:'10%'}} className='App'  >Login Form</Typography>
    <br />
    <br />
    <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} >
        <TextField variant='outlined' fullWidth label='Email' name='email' onChange={(e=>{
          setUser({...user,email:e.target.value})
        })} />
    <br />
    <br />    
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <TextField variant='outlined'  fullWidth label ='Password' name='password' type='password' onChange={(e)=>{
          setUser({...user,password:e.target.value})
        }} />
    <br />
    <br />    
         </Grid>
         <Grid item xs={12} sm={12} md={12}>
          <Button variant='standard' style={{backgroundColor:'green', color:'white'}} onClick={addHandler} >LOGIN</Button>
         </Grid>
    <br />
    <br />     
         <Grid item xs={12} sm={12} maxWidth={12} >
          <Link to={'/sign'}>SignUp</Link>
          </Grid>
          </Grid>
    </div>
  )
}

export default Login