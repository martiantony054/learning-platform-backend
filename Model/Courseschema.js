const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    Title:{
        type:String,
        Required:true

    },
    Description:{
        type:String,
        Required:true

    },
    Duration:{
           type:Number,
           Required:true

    },
    Instructor:{
        type:String,
        Required:true
    }
})
const Course = mongoose.model('Course',CourseSchema)
module.exports=Course;