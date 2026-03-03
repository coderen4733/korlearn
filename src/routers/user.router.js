import express from "express";
import { UserController } from "../controllers/user.controller.js";
import { requireAccessToken } from "../middlewares/require-access-token.middleware.js"

const userRouter = express.Router();
const userController = new UserController();

/** 내 정보 조회 **/
userRouter.get("/me", requireAccessToken, userController.readMe);

export { userRouter };