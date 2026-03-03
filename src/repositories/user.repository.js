import { User } from "../schemas/user.schema.js";

export class UserRepository {
  /** 회원 가입 **/
  createUser = async ({ email, password, nickname }) => {
    // 1. DB
    const user = new User({ email, password, nickname });
    const data = await user.save();
    // 2. Return
    return data;
  }

  /** 회원 조회 (id) **/
  readUserById = async ({ id }) => {
    // 1. DB
    const user = await User.findById(id).exec();
    // 2. Return
    return user;
  }

  /** 회원 조회 (email) **/
  readUserByEmail = async ({ email }) => {
    // 1. DB
    const user = await User.findOne({ email: email }).exec();
    // 2. Return
    return user;
  }
}