import Joi from "joi";

const subscriber = Joi.object().keys({
  email: Joi.string().min(10).max(30).required(),
});

export default subscriber;
