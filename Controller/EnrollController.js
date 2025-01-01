const Enroll = require("../Model/Enrollschema");
const Course = require("../Model/Courseschema"); // Ensure the Course model is correctly imported

exports.enrollUser = async (req, res) => {
  console.log("inside enrolluser api");

  const{ CourseId } = req.params; 

  const { Name, Email} = req.body; // Extract Name and Email from request body


  try {
    // Check if CourseId is provided
    if (!CourseId) {
      return res.status(400).json({ message: "CourseId is required" });
    }

    // Check if the course exists
    const courseExists = await Course.findById(CourseId);
    if (!courseExists) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Check if the user is already enrolled
    const existingEnrollment = await Enroll.findOne({ Name, Email, CourseId });
    if (existingEnrollment) {
      return res
        .status(400)
        .json({ message: "User is already enrolled in this course" });
    }

    // Create a new enrollment
    const newEnrollment = new Enroll({
      CourseId,
      Name,
      Email,
    });

    // Save the enrollment
    await newEnrollment.save();
    return res
      .status(200)
      .json({ message: "Enrollment successful", enrollment: newEnrollment });
  } catch (error) {
    console.error("Error in enrollment:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
