import { Candidate } from '../models/candidate.models.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const applyDetails = asyncHandler(async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      skills,
      portfolio,
      github,
      linkedin,
      additionalInfo,
    } = req.body;

    const resume = req.files['resume'] ? req.files['resume'][0].path : '';
    const coverLetter = req.files['coverLetter']
      ? req.files['coverLetter'][0].path
      : '';

    const newCandidate = new Candidate({
      firstName,
      lastName,
      email,
      phone,
      address,
      resume,
      coverLetter,
      skills,
      portfolio,
      github,
      linkedin,
      additionalInfo,
    });

    await newCandidate.save();
    console.log('newCandidate:', newCandidate);

    res.json(
      new ApiResponse(201, newCandidate, 'Application submitted successfully.')
    );
  } catch (error) {
    console.error('Error saving candidate:', error);
    res
      .status(500)
      .json(new ApiError(500, error.message, 'Candidate not submitted.'));
  }
});

const getAllCandidates = asyncHandler(async (req, res) => {
  try {
    const candidates = await Candidate.find().populate('jobPosition');

    res.json(
      new ApiResponse(200, candidates, 'Candidates retrieved successfully.')
    );
  } catch (error) {
    console.error('Error retrieving candidates:', error);
    res
      .status(400)
      .json(
        new ApiResponse(400, error.message, 'Failed to retrieve candidates.')
      );
  }
});

export { applyDetails, getAllCandidates };
