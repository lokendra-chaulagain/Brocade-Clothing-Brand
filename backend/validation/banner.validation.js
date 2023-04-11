import Joi from "joi";

const banner = Joi.object().keys({
  title: Joi.string().min(5).max(15).required(),
  description: Joi.string().min(20).max(100).required(),
  thumbnail: Joi.string().min(10).max(200).required(),
});

export default banner;
