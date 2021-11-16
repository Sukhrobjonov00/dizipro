module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("sessions", {
        session_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },

        session_useragent: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
};
