import { Token } from "../schemas/refresh-token.schema.js"

export class AuthRepository {
  /** 리프레시 토큰 조회 **/
  readToken = async ({ userId }) => {
    // 1. DB
    const token = await Token.findOne({ userId });
    // 2. Return
    return token;
  }

  /** 리프레시 토큰 업서트 **/
  upsertToken = async ({ userId, refreshToken }) => {
    // 1. DB
    await Token.findOneAndUpdate(
      { userId: userId },
      { userId: userId, token: refreshToken },
      {
        upsert: true,
        returnDocument: 'after',
      }
    )
  }

  /** 리프레시 토큰 삭제 **/
  deleteToken = async ({ userId }) => {
    // 1. DB
    const deleteToken = await Token.findOneAndDelete({ userId })
    // 2. Return
    return deleteToken;
  }
}