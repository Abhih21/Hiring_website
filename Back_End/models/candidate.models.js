import mongoose, { Schema } from 'mongoose';

const candidateSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  resume: { type: String },
  candidateImage: { type: String },
  skills: { type: [String], required: true },
  portfolio: { type: String },
  github: { type: String },
  linkedin: { type: String },
  additionalInfo: { type: String },
  jobPosition: { type: mongoose.Schema.Types.ObjectId, ref: 'JobPosition' },
  status: { type: String, default: 'pending' },
});

const Candidate = mongoose.model('Candidate', candidateSchema);

export { Candidate };
