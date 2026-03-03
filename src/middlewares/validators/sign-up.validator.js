import Joi from "joi";
import { MESSAGES } from "../../constants/message.constant.js";

const schema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": MESSAGES.AUTH.SIGN_UP.FAIL.EMAIL.NO_EMAIL,
    "string.email": MESSAGES.AUTH.SIGN_UP.FAIL.EMAIL.INVALID_FORMAT,
  }),
  password: Joi.string().required().min(4).messages({
    "any.required": MESSAGES.AUTH.SIGN_UP.FAIL.PASSWORD.NO_PASSWORD,
    "string.min": MESSAGES.AUTH.SIGN_UP.FAIL.PASSWORD.MIN_LENGTH,
  }),
  passwordConfirm: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.required": MESSAGES.AUTH.SIGN_UP.FAIL.PASSWORD.NO_PASSWORD_CONFIRM,
    "any.only": MESSAGES.AUTH.SIGN_UP.FAIL.PASSWORD.NOT_MATCHED,
  }),
  nickname: Joi.string().required().messages({
    "any.required": MESSAGES.AUTH.SIGN_UP.FAIL.NICKNAME.NO_NICKNAME,
  })
})

export const signUpValidator = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};