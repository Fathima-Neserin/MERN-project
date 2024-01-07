import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import App from '../App';


const Profile = () => {
  return (
    <div><Card sx={{ maxWidth: 400 }} style={{margin:'8% 35%'}} className='App'>
    <CardMedia
      sx={{ height: 345 }}
      image="data:image/png;base64,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"
      title="Profile Picture"
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div" style={{color:'green'}}>
        Fathima Neserin
      </Typography>
      <Typography variant="body2" color="green">
        fnzrn@gmail.com
      </Typography>
      <Typography variant="body2" color="green">
      9876543216
      </Typography>
      <Typography variant="body2" color="green">
        Calicut
      </Typography>
    </CardContent>
    <CardActions>

    </CardActions>
  </Card>
</div>
  )
}

export default Profile