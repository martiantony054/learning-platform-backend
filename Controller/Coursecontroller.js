const mongoose = require("mongoose");
const Course = require("../Model/Courseschema");

exports.addcourse = async (req, res) => {
  console.log("inside addcourse api");

  const { Title, Description, Duration, Instructor } = req.body;

  try {
    const course = await Course.findOne({ Title: Title });
    if (course) {
      return res.status(400).json("course already added ");
    } else {
      const newcourse = new Course({
        Title,
        Description,
        Duration,
        Instructor,
      });
      await newcourse.save();
      return res.status(200).json(newcourse);
    }
  } catch (e) {
    console.error("error in adding in courses", +e);
  }
};
exports.getcourses = async (req, res) => {
  console.log("inside getcourses api");

  try {
    const getcorse = await Course.find();
    if (!getcorse) {
      return res.status(400).json("no courses found");
    } else {
      return res
        .status(200)
        .json({ message: "Courses fetched Sucessfully", getcorse });
    }
  } catch (e) {
    return res.status(401).json("error in fetching");
  }
};
exports.deletecourse = async (req, res) => {
    console.log("inside deletcourse api");
    const { courseId } = req.params;
    console.log("Received courseId:", courseId); // Debugging
    try {
      const course = await Course.findById(courseId);
      if (!course) {
        return res.status(404).json({ message: "Course not found." });
      }
      const result = await Course.findByIdAndDelete(courseId);
      console.log("Delete result:", result); // Debugging
      if (result) {
        res.status(200).json({ message: "Course deleted successfully!" });
      } else {
        res.status(404).json({ message: "Course not found." });
      }
    } catch (e) {
      console.error("Error in deletion:", e); // Debugging
      res.status(500).json({ message: "Error deleting course.", e });
    }
  };
  