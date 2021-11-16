const { hashSync, genSaltSync, compareSync } = require("bcrypt");

module.exports.genHash = (password) => {
    return hashSync(password, genSaltSync(10));
};

module.exports.compareHash = (password, hash) => {
    return compareSync(password, hash);
};
