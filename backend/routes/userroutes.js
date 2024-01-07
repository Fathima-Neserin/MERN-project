const express=require('express');
const EmployeeModel=require('../model/EMPdata');
const jwt=require('jsonwebtoken');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post('/login',async(req,res)=>{
    try {
        console.log(req.body);

        var email=req.body.email;
        var passw=req.body.password;
      if (email=='admin98@gmail.com' && passw=='12345') {
        let privatekey={email:email,password:passw}
        const token=jwt.sign(privatekey,'employee')
        res.status(200).send({message:'Success',token:token})        
      } else {
        res.status(400).send({message:'Unauthorised'});
      }  
    } catch (error) {
        res.status(404).send({message:'Not found'});
    }
})
module.exports=router;