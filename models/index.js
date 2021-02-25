const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
// const dbsyc = require('../dbsync')

const basename = path.basename(__filename);


const db = {};

const dbCreds = require('../resources/config').getDatabaseCreds();
dbCreds.define = {};
console.log('dbCreds', dbCreds)

const sequelize = new Sequelize(dbCreds.name, dbCreds.username, dbCreds.password, {
    host: 'localhost',
    dialect: 'mysql'
});

// Testing Connection 
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;



module.exports = db;