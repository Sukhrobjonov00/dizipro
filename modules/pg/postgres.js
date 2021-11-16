const { Sequelize } = require("sequelize");
const CountryModel = require("../../models/CountryModel");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
});

module.exports = async function postgres() {
    try {
        await sequelize.authenticate();

        const db = {};

        db.countries = await CountryModel(sequelize, Sequelize);

        return db;
    } catch (error) {
        console.log("DATABASE ERROR:", error);
    }
};
