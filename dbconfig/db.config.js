const env = require('./db.env.development');
const fs = require('fs');
const Sequelize = require('sequelize');

// kết nối đến database bằng sequelize
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,

    pool: {
        max: env.pool.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle,
    },

    dialectOptions: {
        ssl: {
            ca: fs.readFileSync(env.sslCA)
        }
    }
});

module.exports = sequelize;