const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Fathima:Nezrin@cluster0.dpqug0l.mongodb.net/EMP?retryWrites=true&w=majority')  //mongo connection string
.then(()=>{
    console.log('DB connected successfully');
}).catch(()=>{
    console.log('Error!! Not connected');
})