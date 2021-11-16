const joi = require("joi");

module.exports = class UserValidations {
    static async UserCreateAccountValidation(data, error) {
        return await joi
            .object({
                username: joi
                    .string()
                    .min(2)
                    .max(64)
                    .required()
                    .error(
                        new error(
                            400,
                            "Username must be between 2 and 64 characters"
                        )
                    ),
                email: joi
                    .string()
                    .email()
                    .lowercase()
                    .error(new error(400, "Email is invalid")),
                gender: joi
                    .string()
                    .valid("male", "female")
                    .required()
                    .error(new error(400, "Gender is invalid")),
                country_id: joi
                    .number()
                    .required()
                    .error(new error(400, "Country id is invalid")),
                password: joi
                    .string()
                    .min(4)
                    .max(128)
                    .required()
                    .error(new error(400, "Password is invalid")),
            })
            .validateAsync(data);
    }
};
