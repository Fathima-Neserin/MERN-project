const express=require('express');
const EmployeeModel=require('../model/EMPdata');
const jwt=require('jsonwebtoken');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));

    router.post('/login',(req,res)=>{
      if (email=='admin98@gmail.com' && passw=='12345') {
        try{
          console.log(req.body);
          var email=req.body.email;
          var passw=req.body.password;

        let privatekey={email:email,password:passw}
        const token=jwt.sign(privatekey,'employee')
        res.status(200).send({message:'Success',token:token})        
      }
     catch (error) {
        res.status(404).send({message:'Not found'});
    }}else{
      res.status(400).send({message:"Unauthorised"});
    }})

module.exports=router;
