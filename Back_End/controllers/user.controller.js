import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";



const generateAccessAndRefreshTokens = async(userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validationBeforeSave: false})

        return { accessToken, refreshToken}

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token ")
    }
}


//register User

const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password, username} = req.body;
    console.log(req.body);

     if([name, email, password, username].some((field) => field?.trim() === "")) {
        throw new ApiError(409, "All fields are required");
    }

    const existedUser = await User.findOne({ 
        $or: [{ username}, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "Email or username already exists");
    }
    console.log(req.files);

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name, 
        email,
        password: hashedPassword,
        username: username.toLowerCase()
    });

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user");
    }

    return res.status(201).json(
        new ApiResponse(201, createdUser, "User registered successfully"));
});


//logIn

const loginUser = asyncHandler(async (req, res) => {

    const {email, password} = req.body;
    console.log(email);

    if (!email && !password) {
        throw new ApiError(400, "Email and password are required");

    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new ApiError(40, "Invalid email or password");
    }

    const isMatch = await user.isPasswordCorrect(password)

    if (!isMatch) {
        throw new ApiError(401, "Invalid email or password");
    }

        // const token = jwt.sign({ id: user._id, type: user.type }, process.env.JWT_SECRET,{
        //     expiresIn: '1h',
        // });

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password")

    const options = { 
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse
        (200,
             {
                user: loggedInUser, accessToken, refreshToken
             }, 
             "Login Successful"
        )
    );
});



//LogOut

const logoutUser = asyncHandler(async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1

            }
        },
        {
            new: true
        }
    )
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))

})


export {
    registerUser,
    loginUser,
    logoutUser
}