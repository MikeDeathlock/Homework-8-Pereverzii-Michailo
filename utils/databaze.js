const Sequalize = require("sequelize");

const sequelize = new Sequalize("online_shop", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.sync();
module.exports = sequelize;