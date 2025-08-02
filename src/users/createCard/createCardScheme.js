import Joi from 'joi';


export const createCardScheme = {
    title: Joi.string().min(1).required(),
    subtitle: Joi.string().min(1).required(),
    description: Joi.string().min(1).required(),
    phone: Joi.string().pattern(/^\d{10}$/).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    web: Joi.string().uri().required(),
    url: Joi.string().uri().required(),
    alt: Joi.string().min(1).required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    street: Joi.string().required(),
    houseNumber: Joi.number().required(),
    zip: Joi.number().required(),
};
