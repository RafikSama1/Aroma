const Joi = require('joi');

exports.blog = {
    title: Joi.string().required(),
    ingredients: Joi.array().items(Joi.string()).required(),
    instructions: Joi.array().items(Joi.string()).required(),
    video_link: Joi.string(),
}