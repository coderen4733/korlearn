import mongoose from "mongoose";
import { USER_ROLE } from "./types/user.type.js"

const userSchema = new mongoose.Schema(
  // 1. 스키마 정의
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: Object.values(USER_ROLE), // USER_STATUS의 value 값으로 만든 배열
      default: USER_ROLE.MEMBER,
    },
    password: {
      type: String,
      required: true,
    },
  },
  // 2. 추가 옵션
  {
    timestamps: true, // createdAt, updatedAt을 사용하기 위해 true
    toJSON: { virtuals: true }, // _id 대신 id 가상커럼 활용
  },
);

export const User = mongoose.model("User", userSchema);