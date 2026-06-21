import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import {User} from "../models/user.model.js"
import { ApiError } from "../utils/apiError.js";

export const verfiyJWT = asyncHandler(async (req,res,next) => {
    try{
    const token = req.cookies?.accessToken ||req.headers("Authorization")?.replace("Bearer ","") 

    if(!token){
        return res.status(401).json({message : "Unauthorized"})
    }

    const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

    const user = await User.findById(decodedToken._id).select("-password -refreshToken")
    if(!user){
        return res.status(401).json({message : "Unauthorized"})
    }

    req.user = user;
    next();
} catch(error) {
    throw new ApiError(401,err?.message || "Invalid")
}

})