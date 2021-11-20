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

    await db.users.hasMany(db.email_attempts, {
        foreignKey: "user_id",
        allowNull: false,
    });

    await db.email_attempts.belongsTo(db.users, {
        foreignKey: "user_id",
        allowNull: false,
    });

    await db.users.hasMany(db.user_bans, {
        foreignKey: "user_id",
        allowNull: false,
    });

    await db.user_bans.belongsTo(db.users, {
        foreignKey: "user_id",
        allowNull: false,
    });
};
