import { HTTP_STATUS } from "../constants/http-status.constant.js";
import { MESSAGES } from "../constants/message.constant.js";

import { UserService } from "../services/user.service.js";

const userService = new UserService();

export class UserController {
  /** 내 정보 조회 **/
  readMe = async (req, res, next) => {
    try {
      // 1. Request
      const user = req.user;
      // 2. Service
      const data = await userService.readMe(user);
      // 3. Response
      return res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        message: MESSAGES.USER.READ.ME.SUCCEED,
        data: data,
      })
    } catch (err) {
      next(err);
    }
  }
}