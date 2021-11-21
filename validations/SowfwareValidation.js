const joi = require("joi");

module.exports = class SoftwareValidation {
    static async SoftwareCreateValidation(data, error) {
        return await joi
            .object({
                software_name: joi
                    .string()
                    .min(2)
                    .max(64)
                    .required()
                    .error(new error(400, "Name invalid")),
            })
            .validateAsync(data);
    }
};
