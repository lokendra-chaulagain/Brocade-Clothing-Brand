import Joi from "joi";

const contact = Joi.object().keys({
  name: Joi.string().min(8).max(30).required(),
  email: Joi.string().min(8).max(30).required(),
  phone: Joi.string().min(10).max(20).required(),
  message: Joi.string().min(10).max(200).required(),
});

export default contact;
