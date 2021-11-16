module.exports = async (db) => {
    await db.countries.hasMany(db.users, {
        foreignKey: "country_id",
        allowNull: false,
    });

    await db.users.belongsTo(db.countries, {
        foreignKey: "country_id",
        allowNull: false,
    });
};
