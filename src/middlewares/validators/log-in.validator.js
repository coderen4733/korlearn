import Joi from "joi";
import { MESSAGES } from "../../constants/message.constant.js";

const schema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": MESSAGES.AUTH.LOG_IN.FAIL.EMAIL.NO_EMAIL,
    "string.email": MESSAGES.AUTH.LOG_IN.FAIL.EMAIL.INVALID_FORMAT,
  }),
  password: Joi.string().required().messages({
    "any.required": MESSAGES.AUTH.LOG_IN.FAIL.PASSWORD.NO_PASSWORD,
  }),
})

export const logInValidator = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};