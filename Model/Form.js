const mongoose = require("mongoose");
const noticeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "firstName Is Required"],
    trim: true,
  },
  middleName: {
    type: String,
    required: [true, "middlename Is Required"],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, "lastname Is Required"],
    trim: true,
  },
  fatherName: {
    type: String,
    required: [true, "fathername Is Required"],
    trim: true,
  },
  motherName: {
    type: String,
    required: [true, "mothername Is Required"],
    trim: true,
  },
  dateOfBirth: {
    type: String,
    required: [true, "dob Is Required"],
    trim: true,
  },
  nationality: {
    type: String,
    required: [true, "nationality Is Required"],
    trim: true,
  },
  permanentAddress: {
    type: String,
    required: [true, "pa Is Required"],
    trim: true,
  },
  temporaryAddress: {
    type: String,
    required: [true, "ta Is Required"],
    trim: true,
  },
  sc: {
    type: String,
    required: [true, "sc Is Required"],
    trim: true,
  },
  contactNumber: {
    type: String,
    required: [true, "number Is Required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "email Is Required"],
    trim: true,
  },
  faculty: {
    type: String,
    required: [true, "faculty Is Required"],
  },
  marksObtained: {
    type: String,
    required: [true, "marks Is Required"],
    trim: true,
  },
  tuMarks: {
    type: String,
    required: [true, "tumarks Is Required"],
    trim: true,
  },
  // acceptence: {
  //   type: String,
  //   required: [true, "tumarks Is Required"],
  //   trim: true,
  //   default: "",
  // },
});

module.exports = mongoose.model("OnlineAdmissionForms", noticeSchema);
