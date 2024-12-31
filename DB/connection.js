// import mongoose
const mongoose = require('mongoose')

// getconnectionstring 
const connectionstring = process.env.coectionstring

// define connection
mongoose.connect(connectionstring).then(res=>{
    console.log('HURRAY!!server connected with MONGODB');
    
}).catch(err=>{
    console.log("OOPS!! ERRROR "+err);
    
}) 