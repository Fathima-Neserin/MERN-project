const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const EmployeeModel=require('../model/EMPdata');
const jwt=require('jsonwebtoken');
function verifytoken(req,res,next){
    try{
    let token=req.headers.token;
    if(!token) throw 'Unauthorized';
    let privatekey=jwt.verify(token,'employee');
    if(!privatekey) throw 'Unauthorized';
    next()
    }
    catch(error){
     res.status(401).send('error');
    }
}


router.get('/',verifytoken,async(req,res)=>{
    try {
        const data=await EmployeeModel.find();
        console.log(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send({error:'Data not received'});   
    }
})

router.post('/add',verifytoken,async(req,res)=>{
    const{name,designation,location,salary}=req.body;
    try {
        const newEmployee=await EmployeeModel.create({
            name: name,
            designation: designation,
            location: location,
            salary: salary
        });
        res.status(200).json('Data successfully posted');
    } catch (error) {
        console.error('Error!!',error);
        res.status(500).json({error})
    }
})




router.put('/edit/:id', verifytoken, async (req, res) => {
    try {
        const { name, designation, location, salary } = req.body;
        const id = req.params.id;
        const updateObject = {};
        
        if (name) updateObject.name = name;
        if (designation) updateObject.designation = designation;
        if (location) updateObject.location = location;
        if (salary) updateObject.salary = salary;

        const updatedEmployee = await EmployeeModel.findByIdAndUpdate(req.params.id,updateObject,{new:true});

        if (!updatedEmployee) {
            res.status(404).json({ error: 'Update failed' });
        } else {
            res.json("Updation successful");
        }
    } catch (error) {
        console.error('Error!!', error);
        res.status(500).json({ error });
    }
});



router.delete('/remove/:id', verifytoken, async (req, res) => {
    const id = req.params.id;
    try {
        const deleteEmployee = await EmployeeModel.findByIdAndDelete(id);
        if(!deleteEmployee){
            res.status(404).json({"message":"Employee not found"})
        }else{
            res.status(200).json({"message":"Employee deleted successfully"})
        }
        }
 
    catch (error) {
        console.error('Error!!', error);
        res.status(500).json({ error });
    }})




module.exports=router;