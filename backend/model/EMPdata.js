const mongoose=require('mongoose');

const EMPSchema=mongoose.Schema({
    name:String,
    designation:String,
    location:String,
    salary:Number
});

const EMPdata=mongoose.model('Employee',EMPSchema);
module.exports=EMPdata;