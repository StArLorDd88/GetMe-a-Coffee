import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    clerkId: {
    type: String,
    required: true,
    unique: true,
  },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: null,
    },
    profileImage: {
      type: String,
      default: null,
    },
    otp: {
      type: String,
      maxlength: 250,
      default: null,
    },
    otpTime: {
      type: Date,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,  
    versionKey: false, 
  }
);


export const User = mongoose.model("User", userSchema);