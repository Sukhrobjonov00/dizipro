const { Sequelize } = require("sequelize");
const CountryModel = require("../../models/CountryModel");
const SessionModel = require("../../models/SessionModel");
const UserModel = require("../../models/UserModel");
const init = require("./init");
const relations = require("./relations");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
});

module.exports = async function postgres() {
    try {
        await sequelize.authenticate();

        const db = {};

        db.countries = await CountryModel(sequelize, Sequelize);
        db.users = await UserModel(sequelize, Sequelize);
        db.sessions = await SessionModel(sequelize, Sequelize);

        await relations(db);

        await init(db);

        sequelize.sync({ force: false });

        return db;
    } catch (error) {
        console.log("DATABASE ERROR:", error);
    }
};
