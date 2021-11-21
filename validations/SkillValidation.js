module.exports = class SkillValidation {
    static async SkillCreateValidation(data, error) {
        return await joi
            .object({
                skill_name: joi
                    .min(2)
                    .max(64)
                    .required()
                    .error(new error(400, "Name invalid")),
            })
            .validateAsync(data);
    }
};
