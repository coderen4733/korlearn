import express from "express";
import { authRouter } from "./auth.router.js";
import { userRouter } from "./user.router.js";

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/users", userRouter);
// TODO. user router 추가
// TODO. post router 추가
// TODO. comment router 추가
// ...

export { apiRouter };