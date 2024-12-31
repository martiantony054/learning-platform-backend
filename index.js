require('dotenv').config()

const expr = require('express')

const cors = require('cors')

const db = require('./DB/connection')

const router = require('./Routes/router')

const app = expr()

// middleware config
app.use(expr.json());
app.use(cors());
app.use(router)

const PORT = 3000 || process.env.PORT

app.listen(PORT,()=>{
    console.log("Running on PORT ",+PORT);})

app.get('/',(req,res)=>{
       res.send('welcome to backend server')}) 

