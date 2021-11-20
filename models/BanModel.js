module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("user_bans", {
        ban_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        ban_reason: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        ban_expire_date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    });
};
