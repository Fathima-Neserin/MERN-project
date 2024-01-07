import { Typography , Grid, TextField , Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div style={{margin:'10%'}} className='App'>
      <Typography variant='h3' style={{color:'green'}}>SignUp Form</Typography>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <TextField vatiant='outlined' fullWidth label='Name'/>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
          <TextField vatiant='outlined' fullWidth label='Email'/>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <TextField vatiant='outlined' fullWidth label='Address' multiline rows={5} />
          </Grid>  
          <Grid item xs={12} sm={12} md={12}>
          <TextField vatiant='outlined' fullWidth label='Phone'/>
          </Grid>  
          <Grid item xs={12} sm={12} md={12}>
          <TextField vatiant='outlined' fullWidth label='Username'/>
          </Grid>  
          <Grid item xs={12} sm={12} md={12}>
          <TextField vatiant='outlined' fullWidth label='Password'/>
          </Grid>  
          <Grid item xs={12} sm={12} md={12}>
          <Button variant='standard' style={{color:'white', backgroundColor:'green'}} >SignUp</Button>
          </Grid>  
          <Grid item xs={12} sm={12} md={12}>
          <Link to={'/'}>Login</Link>
            </Grid>
            </Grid>
    </div>
  )
}

export default Signup