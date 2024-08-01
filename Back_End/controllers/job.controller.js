import { JobPost } from '../models/job.models.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js'; // Adjust the path as needed

const createJobPost = asyncHandler(async (req, res) => {
  try {
    const {
      title,
      salaryRange,
      categories,
      skills,
      description,
      companyName,
      companyWebsite,
      applicationDeadline,
    } = req.body;

    // Log the request body to check data
    console.log('Request body:', req.body);

    // Handle file upload
    let companyLogoUrl = '';
    if (req.file) {
      const uploadResponse = await uploadOnCloudinary(req.file.path);
      if (uploadResponse) {
        companyLogoUrl = uploadResponse.secure_url; // Get the URL of the uploaded image
      } else {
        throw new Error('Failed to upload image to Cloudinary');
      }
    }

    console.log('Company Logo URL:', companyLogoUrl);

    // Create new job post
    const newJobPost = new JobPost({
      title,
      salaryRange: JSON.parse(salaryRange), // Ensure salaryRange is parsed correctly
      categories: JSON.parse(categories), // Ensure categories is parsed correctly
      skills: JSON.parse(skills), // Ensure skills is parsed correctly
      description,
      companyName,
      companyWebsite,
      applicationDeadline,
      companyLogo: companyLogoUrl,
    });

    // Save to database
    const savedJobPost = await newJobPost.save();
    console.log('Saved Job Post:', savedJobPost);

    // Send success response
    res
      .status(201)
      .json(new ApiResponse(201, savedJobPost, 'Job created successfully.'));
  } catch (error) {
    // Log the error for debugging
    console.error('Error in createJobPost:', error);

    // Send error response
    res.status(500).json(new ApiResponse(500, null, 'Job creation failed.'));
  }
});

export { createJobPost };
