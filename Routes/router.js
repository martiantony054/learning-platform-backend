const  expr = require('express')

const router = expr.Router()

const coursecntrl = require("../Controller/Coursecontroller")

const enrollcntrl = require("../Controller/EnrollController")


router.post('/addcourse',coursecntrl.addcourse)

router.post('/enrolluser/:CourseId',enrollcntrl.enrollUser)

router.get('/getcourses',coursecntrl.getcourses)

router.get('/deletecourse/:courseId',coursecntrl.deletecourse)

module.exports=router; 
