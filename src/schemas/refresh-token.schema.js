import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema(
  // 1. 스키마 정의
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    token: {
      type: String,
      required: true,
    }
  },
  // 2. 추가 옵션
  {
    timestamps: true,
    toJSON: { virtuals: true }
  },
);

export const Token = mongoose.model("Token", tokenSchema);