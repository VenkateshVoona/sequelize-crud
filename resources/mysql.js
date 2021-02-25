'use strict';
const mysql = require('mysql2');
const mysqlcreds = require('./config').getDatabaseCreds();
var util = require('util');
console.log('Setting up connection to vision mysql...');

console.log('Mysql hostname: ' + mysqlcreds.hostname);
console.log('Mysql username: ' + mysqlcreds.username);
console.log('Mysql database: ' + mysqlcreds.name);

// config for database
const dbConfig = {
    "connectionLimit": 5,
    "host": mysqlcreds.hostname,
    "user": mysqlcreds.username,
    "password": mysqlcreds.password,
    "database": mysqlcreds.name,
    "port": parseInt(mysqlcreds.port, 10),
    "multipleStatements": true
}


const pool = new mysql.createPool(dbConfig)
    
// Promisify for Node.js async/await.
pool.query = util.promisify(pool.query);

exports.pool = pool;
exports.mysql = mysql;