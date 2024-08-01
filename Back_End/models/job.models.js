// models/JobPost.js
import mongoose from 'mongoose';

const jobPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    salaryRange: {
      type: [Number],
      required: true,
    },
    categories: {
      type: [String],
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyWebsite: {
      type: String,
      required: true,
    },
    companyLogo: {
      type: String, // Store URL or path if using file storage
      required: true,
    },
    applicationDeadline: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const JobPost = mongoose.model('JobPost', jobPostSchema);

export { JobPost };
