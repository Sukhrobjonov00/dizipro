const { SkillCreateValidation } = require("../validations/SkillValidation");

module.exports = class SkillController {
    static async AddSkillPostController(req, res, next) {
        try {
            const { skill_name } = await SkillCreateValidation(
                req.body,
                res.error
            );

            const skill = await req.db.skills.create({
                skill_name,
            });

            res.status(201).json({
                ok: true,
                message: "Skill created successfully",
                data: { skill },
            });
        } catch (error) {
            next(error);
        }
    }

    static async SkillsGetController(req, res, next) {
        try {
            const skills = await req.db.skills.findAll();

            res.status(200).json({
                ok: true,
                message: "Skills list",
                data: { skills },
            });
        } catch (error) {
            next(error);
        }
    }
};
