const mongoose = require("mongoose");

const EnrollSchema = new mongoose.Schema({
  CourseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course", // Reference to the Course model
    required: true,
  },
  Name: {
    type: String,
    required: true,
   
  },
  Email: {
    type: String,
    required: true,
  }
});
const enroll = mongoose.model("enroll", EnrollSchema);
module.exports = enroll;
