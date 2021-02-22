const Sequalize = require("sequelize");

const sequelize = require("../utils/databaze");

const Product = sequelize.define("product", {
    id: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequalize.STRING,        
        allowNull: false        
    },
    price: {
        type: Sequalize.DOUBLE,        
        allowNull: false        
    },
    image: {
        type: Sequalize.STRING,        
        allowNull: false        
    },
    description: {
        type: Sequalize.STRING,        
        allowNull: false        
    }
})

module.exports = Product;