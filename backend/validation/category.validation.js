import Joi from "joi";

const category = Joi.object().keys({
  name: Joi.string().min(3).max(20).required(),
});

export default category;
