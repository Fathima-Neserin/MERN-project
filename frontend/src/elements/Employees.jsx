import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../axiosinterceptor';
import AddEmployee from './AddEmployee';
import { useNavigate } from 'react-router-dom';

const Employees = () => {
  var [update,setUpdate]=useState(false);
  var[singleValue,setSingleValue]=useState([]);
  const[employee,setEmployee]=useState([]);
  let finalJSX;

  useEffect(()=>{
    axiosInstance.get('/emps').then((res)=>{
   
     setEmployee(...employee,res.data);
    
    })
 
   },[])
   const updateEmployee = (val)=>{
     console.log("update clicked",val);
     setUpdate(true);
     setSingleValue(val)
   }

    
    function removeEmployee(id) {
      axiosInstance.delete('/emps/remove/'+id)
        .then((res) => {
          alert(res.data.message);
          // Update the state to remove the deleted employee
          setEmployee(prevEmployee => prevEmployee.filter(emp => emp._id !== id));
          
        })
        
    }

if(Array.isArray(employee)){
      
  
  finalJSX=(
  
     <div style={{margin:'6%'}}>
      <Grid container spacing={2}>
        {employee.map((val,i)=>(
        <Grid item xs={12} sm={6} md={4} key={i}>
       <Card sx={{ maxWidth: 345 }}>
        
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" color='green'>
        {val.name}
        </Typography>
        <Typography variant="body2" >
        {val.designation}
        </Typography>
        <Typography  variant="body2">
        {val.location}
        </Typography>
        <Typography  variant="body2">
        {val.salary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{color:'white', backgroundColor:'green'}} onClick={()=>{removeEmployee(val._id)}}> Delete</Button>
        <Button size="small" style={{color:'white', backgroundColor:'green'}} onClick={()=>updateEmployee(val)} >Update</Button>
      </CardActions>
    </Card>
    </Grid>
    ))}
  </Grid>
     </div>
     )
    } else {
      console.error('employee is not an array');
    }
  if(update) finalJSX  =  <AddEmployee method="put"  data={singleValue}/>
  return(

    finalJSX

  )
}

export default Employees