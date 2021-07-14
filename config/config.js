const mysqlConfig = {
    host: process.env.HOST,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASSWORD
};

module.exports = mysqlConfig;