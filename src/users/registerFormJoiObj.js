import Joi from "joi";

export const JOIObject = {
    firstName: Joi.string().min(2).max(15).required().label("First Name"),
    middleName: Joi.string().allow("").max(20).label("Middle Name"),
    lastName: Joi.string().min(2).max(15).required().label("Last Name"),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("Email"),
    phone: Joi.string()
        .pattern(/^0\d{1,2}-?\d{7}$/)
        .required()
        .messages({
            "string.pattern.base": "Phone must be a valid Israeli phone number",
        })
        .label("Phone"),
    password: Joi.string()
        .min(8)
        .max(32)
        .pattern(/[A-Z]/, "one uppercase letter")
        .pattern(/[a-z]/, "one lowercase letter")
        .pattern(/[0-9]/, "one number")
        .pattern(/[^a-zA-Z0-9]/, "one special character")
        .required()
        .messages({
            "string.pattern.name":
                "Password must contain at least {#name}.",
            "string.min": "Password must be at least {#limit} characters",
            "string.max": "Password can't be longer than {#limit} characters",
        })
        .label("Password"),

    url: Joi.string()
        .uri({ allowRelative: false })
        .allow("")
        .label("Image URL"),
    alt: Joi.string().allow("").max(100).label("Image Description"),
    state: Joi.string().allow("").max(50).label("State"),
    country: Joi.string().min(2).max(50).required().label("Country"),
    city: Joi.string().min(2).max(50).required().label("City"),
    street: Joi.string().min(2).max(50).required().label("Street"),
    houseNumber: Joi.number().integer().min(1).required().label("House Number"),
    zip: Joi.number().integer().min(0).allow("").label("ZIP"),
};
