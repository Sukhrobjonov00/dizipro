const {
    SoftwareCreateValidation,
} = require("../validations/SowfwareValidation");

module.exports = class SoftwareController {
    static async AddSoftwarePostController(req, res, next) {
        try {
            const { software_name } = await SoftwareCreateValidation(
                req.body,
                res.error
            );

            const software = await req.db.software.create({
                software_name,
            });

            res.status(201).json({
                ok: true,
                message: "Software created successfully",
                data: { software },
            });
        } catch (error) {
            next(error);
        }
    }

    static async SoftwaresGetController(req, res, next) {
        try {
            const softwares = await req.db.software.findAll();

            res.status(200).json({
                ok: true,
                message: "Softwares list",
                data: { softwares },
            });
        } catch (error) {
            next(error);
        }
    }
};
