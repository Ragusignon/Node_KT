const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');

const sequelizeConnect = new Sequelize(
    dbConfig.db,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialact,
        pool : {
            max : dbConfig.pool.max,
            min : dbConfig.pool.min,
            idle : dbConfig.pool.idle,
            acquire : dbConfig.pool.acquire
        },
        define : {
            timestamps : false
        }
    }
)

const db = {};

db.sequelizeConnect = sequelizeConnect;
db.Sequelize = Sequelize;

db.Users = require('./users.models.js')(sequelizeConnect, Sequelize);

db.Roles = require('./roles.models.js')(sequelizeConnect, Sequelize);

module.exports = db;


