import { mongoose, Schema } from "mongoose";


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required:true,
        },
        
}, {timestamps: true})




userSchema.pre("save", async function(next){
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password,10)
    next()
})


userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    Jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            name: this.name,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


userSchema.methods.generateRefreshToken = function(){
    jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}













const User = mongoose.model("User", userSchema);


export {
    User
};