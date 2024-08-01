import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config(); // Ensure that environment variables are loaded

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async imageFilePath => {
  try {
    if (!imageFilePath) throw new Error('No file path provided');

    // Upload the file on Cloudinary
    const response = await cloudinary.uploader.upload(imageFilePath, {
      resource_type: 'auto',
    });

    // Remove the locally saved temporary file
    fs.unlinkSync(imageFilePath);

    return response;
  } catch (error) {
    // Log the error for debugging
    console.error('Cloudinary upload error:', error);

    // Ensure the file is removed even if upload fails
    if (fs.existsSync(imageFilePath)) {
      fs.unlinkSync(imageFilePath);
    }

    return null;
  }
};

export { uploadOnCloudinary };
