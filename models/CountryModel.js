module.exports = async (Sequelize, sequelize) => {
    return sequelize.define("countries", {
        country_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        country_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        country_code: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
};
