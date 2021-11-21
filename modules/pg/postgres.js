const { Sequelize } = require("sequelize");
const BanModel = require("../../models/BanModel");
const CountryModel = require("../../models/CountryModel");
const EmailAttempts = require("../../models/EmailAttempts");
const ProjectFilesModel = require("../../models/ProjectFilesModel");
const ProjectModel = require("../../models/ProjectModel");
const ProjectSoftwareModel = require("../../models/ProjectSoftwareModel");
const ProjectsSkillModel = require("../../models/ProjectsSkillModel");
const SessionModel = require("../../models/SessionModel");
const SkillModel = require("../../models/SkillModel");
const SoftwareModel = require("../../models/SoftwareModel");
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
        db.email_attempts = await EmailAttempts(sequelize, Sequelize);
        db.user_bans = await BanModel(sequelize, Sequelize);
        db.skills = await SkillModel(sequelize, Sequelize);
        db.softwares = await SoftwareModel(sequelize, Sequelize);
        db.projects = await ProjectModel(sequelize, Sequelize);
        db.projects_skills = await ProjectsSkillModel(sequelize, Sequelize);
        db.projects_softwares = await ProjectSoftwareModel(
            sequelize,
            Sequelize
        );
        db.projects_files = await ProjectFilesModel(sequelize, Sequelize);

        await relations(db);

        await init(db);

        sequelize.sync({ force: false });

        return db;
    } catch (error) {
        console.log("DATABASE ERROR:", error);
    }
};
