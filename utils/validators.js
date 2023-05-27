const Joi = require('joi');
/**
 * Validate create HERO data.
 */
exports.createHeroValidator = (data) => Joi.object().keys({
    nickname: Joi.string().min(1).max(20),
    real_name: Joi.string(),
    origin_description: Joi.string(),
    superpowers: Joi.string(),
    catch_phrase: Joi.string(),
    images: Joi.string(),
  }).validate(data);