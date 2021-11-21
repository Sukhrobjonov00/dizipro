const joi = require("joi");

module.exports = class ProjectValidation {
    static async ProjectCreateValidation(data, error) {
        return await joi
            .object({
                project_name: joi
                    .string()
                    .min(2)
                    .max(64)
                    .required()
                    .error(new error(400, "Name invalid")),
                project_description: joi
                    .string()
                    .min(10)
                    .max(4096)
                    .required()
                    .error(new error(400, "Description invalid")),
                project_skills: joi
                    .array()
                    .required()
                    .error(new error(400, "Skills are invalid")),
                project_softwares: joi
                    .array()
                    .required()
                    .error(new error(400, "Softwares are invalid")),
                project_budget: joi
                    .number()
                    .min(1)
                    .required()
                    .error(new error(400, "Budjet is invalid")),
                project_currency: joi
                    .string()
                    .valid("USD", "EUR", "RUB", "UZS")
                    .required()
                    .error(new error(400, "Currency is invalid")),
                project_deadline: joi
                    .date()
                    .min(new Date())
                    .error(new error(400, "Deadline is invalid")),
            })
            .validateAsync(data);
    }
};
