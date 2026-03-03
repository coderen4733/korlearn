import { HTTP_STATUS } from "../constants/http-status.constant.js";
import { MESSAGES } from "../constants/message.constant.js";

import { AuthService } from "../services/auth.service.js";

const authService = new AuthService();

export class AuthController {
  /** 회원가입 **/
  signUp = async (req, res, next) => {
    try {
      // 1. Request
      const { email, password, nickname } = req.body;
      // 2. Service
      const data = await authService.signUp({ email, password, nickname });
      // 3. Response
      return res.status(HTTP_STATUS.CREATED).json({
        status: HTTP_STATUS.CREATED,
        message: MESSAGES.AUTH.SIGN_UP.SUCCEED,
        data: data,
      })
    } catch (err) {
      next(err)
    }
  }

  /** 로그인 **/
  logIn = async (req, res, next) => {
    try {
      // 1. Request
      const { email, password } = req.body;
      // 2. Service
      const data = await authService.logIn({ email, password });
      // 3. Response
      return res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        message: MESSAGES.AUTH.LOG_IN.SUCCEED,
        data: data,
      })
    } catch (err) {
      next(err);
    }
  }

  /** 로그아웃 **/
  logOut = async (req, res, next) => {
    try {
      // 1. Request
      const user = req.user;
      // 2. Service
      const data = await authService.logOut(user);
      // 3. Response
      return res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        message: MESSAGES.AUTH.LOG_OUT.SUCCEED,
        data: {
          userId: data.id,
        }
      })
    } catch (err) {
      next(err);
    }
  }

  /** 토큰 재발급 **/
  reToken = async (req, res, next) => {
    try {
      // 1. Request
      const user = req.user;
      // 2. Service
      const data = await authService.reToken(user);
      // 3. Response
      return res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        message: MESSAGES.AUTH.RE_TOKEN.SUCCEED,
        data: data,
      })
    } catch (err) {
      next(err);
    }
  }
}
