const { Op } = require("sequelize");
const { verifyToken } = require("../modules/jwt");

module.exports = async function AuthMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization;

        if (!token) throw new res.error(401, "Unauthorized");

        const data = verifyToken(token);

        if (!data) throw new res.error(401, "Unauthorized");

        const session = await req.db.sessions.findOne({
            where: {
                session_id: data.session_id,
            },
            include: {
                model: req.db.users,
                include: {
                    model: req.db.user_bans,
                    where: {
                        ban_expire_date: {
                            [Op.gt]: new Date(),
                        },
                    },
                },
            },
            raw: true,
        });

        if (session["user.user_bans.ban_expire_date"]) {
            res.json({
                ok: true,
                error: "You are banned",
                data: {
                    expire_date: session["user.user_bans.ban_expire_date"],
                    reason: session["user.user_bans.ban_reason"],
                },
            });

            return;
        }

        if (!session) throw new res.error(401, "Unauthorized");

        req.session = session;
        req.role = data.user_role;

        next();
    } catch (error) {
        next(error);
    }
};
