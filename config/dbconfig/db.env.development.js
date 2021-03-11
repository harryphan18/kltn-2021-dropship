const path = require('path');
const env = {
    database: 'kltn2021.development',
    username: 'dev@kltn2021mysql',
    password: '12345678@abc',
    host: 'kltn2021mysql.mysql.database.azure.com',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    sslCA: path.resolve(__filename, "..", "ssl.cert/BaltimoreCyberTrustRoot.crt.pem"),
};

module.exports = env;