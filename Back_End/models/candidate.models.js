import mongoose, { Schema } from 'mongoose';

const candidateSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    resume: {
      type: String, // URL or path to the uploaded resume file
      required: true,
    },
    coverLetter: {
      type: String, // URL or path to the uploaded cover letter file
    },
    jobPosition: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job', // Assuming you have a Job model
      required: true,
    },
    status: {
      type: String,
      enum: ['Applied', 'Interviewing', 'Offered', 'Rejected'],
      default: 'Applied',
    },
    appliedAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Candidate = mongoose.model('Candidate', candidateSchema);

export { Candidate };
