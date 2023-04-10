import Joi from "joi";

 const color = Joi.object().keys({
  color: Joi.string().min(3).max(10).required(),
});

export default color
