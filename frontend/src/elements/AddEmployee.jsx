import React, { useEffect, useState } from 'react'
import { Grid , TextField , Typography , Button} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../axiosinterceptor';



const AddEmployee=(props) => {
  const[form,setForm]=useState([{
    name:props.data?.name || '',
    designation:props.data?.designation || '',
    location:props.data?.location || '',
    salary:props.data?.salary || ''
  }]);
  
 function submitform(){
  if(props.method==='put'){
    axiosInstance.put("http://localhost:4000/emps/edit/"+props.data._id,form)
    .then((res)=>{

      if(res.data==="Updation failed"){
        alert(res.data);
        window.location.reload(false);
      }

      else{
        alert('Updation successful');
      }
    })}
    else{
      axiosInstance.post('http://localhost:4000/emps/add',form).then((res)=>{
        alert(res.data);
      })
      .catch((
        console.error
      ))
  }
    }
 

    
  

  return (
    <div style={{margin:'10%'}} className='App'>
    <Typography variant='h3' style={{ color:'green',margin:'3%'}} className='App'>Add an Employee</Typography>
    
    <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} >
        <TextField variant='outlined'  label='Employee Name' fullWidth 
        onChange={(e)=>{
          setForm({...form,name:e.target.value})
        }}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <TextField variant='outlined'   label ='Designation' fullWidth
        onChange={(e)=>{
          setForm({...form,designation:e.target.value})
        }} />
         </Grid>
         <Grid item xs={12} sm={12} md={12}>
        <TextField variant='outlined'   label ='Location' fullWidth
        onChange={(e)=>{
          setForm({...form,location:e.target.value})
        }}/>
         </Grid>
         <Grid item xs={12} sm={12} md={12}>
        <TextField variant='outlined'   label ='Salary' type='number' fullWidth
        onChange={(e)=>{
          setForm({...form,salary:e.target.value})
        }}/>
         </Grid>
        
         <Grid item xs={12} sm={12} maxWidth={12} >
          <Button style={{color:'white', backgroundColor:'green'}} onClick={submitform} >Add</Button>
          </Grid>
          </Grid>
    </div>
  );
  };
      
export default AddEmployee