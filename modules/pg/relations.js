module.exports = async function relations(db) {
    await db.countries.hasMany(db.users, {
        foreignKey: "country_id",
        allowNull: false,
    });

    await db.users.belongsTo(db.countries, {
        foreignKey: "country_id",
        allowNull: false,
    });

    await db.users.hasMany(db.sessions, {
        foreignKey: "user_id",
        allowNull: false,
    });

    await db.sessions.belongsTo(db.users, {
        foreignKey: "user_id",
        allowNull: false,
    });
};