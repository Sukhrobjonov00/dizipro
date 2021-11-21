module.exports = class SoftwareValidation {
    static async SoftwareCreateValidation(data, error) {
        return await joi
            .object({
                software_name: joi
                    .min(2)
                    .max(64)
                    .required()
                    .error(new error(400, "Name invalid")),
            })
            .validateAsync(data);
    }
};
