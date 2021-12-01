const Joi = require("joi");

// Regex validation
// Input Validation Schema
class ValidatorSchema {
  //Register Data Auth Validation
  authRegister = Joi.object({
    name: Joi.string().min(2).required().pattern(new RegExp("[A-Za-z]{1,}$")),

    mobile: Joi.string().required().pattern(new RegExp("[0-9]{10}$")),

    email: Joi.string()
      .required()
      .pattern(
        new RegExp(
          "^[a-zA-z]{3}([+-_ .]*[a-zA-Z0-9]+)*[@][a-zA-z0-9]+(.[a-z]{2,3})*$"
        )
      ),

    password: Joi.string()
      .required()
      .pattern(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
        )
      ),

    // address: Joi.required(),
  });
}

module.exports = new ValidatorSchema();
