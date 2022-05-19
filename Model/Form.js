const mongoose = require("mongoose");
const noticeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  middleName: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  fatherName: {
    type: String,
    required: true,
    trim: true,
  },
  motherName: {
    type: String,
    required: true,
    trim: true,
  },
  nationality: {
    type: String,
    required: true,
    trim: true,
  },
  permanentAddress: {
    type: String,
    required: true,
    trim: true,
  },
  temporaryAddress: {
    type: String,
    required: true,
    trim: true,
  },
  sc: {
    type: String,
    required: true,
    trim: true,
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  marksObtained: {
    type: String,
    required: true,
    trim: true,
  },
  tuMarks: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("OnlineForms", noticeSchema);
