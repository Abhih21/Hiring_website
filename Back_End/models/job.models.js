const mongoose = require('mongoose');

// Define the Job schema
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  requirements: {
    type: [String], // Array of strings for job requirements
    required: true,
  },
  responsibilities: {
    type: [String], // Array of strings for job responsibilities
    required: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  jobType: {
    type: String,
    enum: ['Software-Developer', 'Designer', 'DevOps', 'Marketing'],
    required: true,
  },
  employmentType: {
    type: String,
    enum: ['Full-Time', 'Part-Time', 'Trainee', 'Internship'],
    required: true,
  },
  salary: {
    type: Number, // Salary can be a number or a range, adjust as needed
    required: false,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
  applicationDeadline: {
    type: Date,
    required: false,
  },
  companyLogo: {
    type: String, // URL or path to the company's logo image
    required: false,
  },
});

// Create the Job model
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
