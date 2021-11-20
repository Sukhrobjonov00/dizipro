const joi = require("joi");

module.exports = class AdminValidations {
    static async CreateBanValidation(data, error) {
        return await joi
            .object({
                user_id: joi
                    .string()
                    .uuid()
                    .required()
                    .error(new error(400, "User id is invalid")),
                ban_reason: joi
                    .string()
                    .required()
                    .min(10)
                    .max(1024)
                    .error(new error(400, "Reason is invalid")),
                ban_expire_date: joi
                    .date()
                    .min(new Date())
                    .required()
                    .error(new error(400, "Expire date is invalid")),
            })
            .validateAsync(data);
    }
};
