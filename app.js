const express = require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const morgan=require('morgan');
const  EmployeeRoutes=require('./routes/employeeroutes')
const UserRoutes=require('./routes/userroutes')
const mongourl=process.env.MONGO_URL
const dbname=process.env.DB_NAME

require('dotenv').config();
require('./db/index')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(morgan('dev'));

app.use('/emps',EmployeeRoutes);
app.use('/user', UserRoutes);


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});