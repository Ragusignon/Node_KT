const dbconfig = require('../config/db.config.js');
const sequelize = require('sequelize');

const sequelizeConnect = new sequelize(
    dbconfig.db,
    dbconfig.user,
    dbconfig.password, 
    {
        host : dbconfig.host,
        dialect : dbconfig.dialact,
        pool : {
            max : dbconfig.pool.max,
            min : dbconfig.pool.min,
            acquire : dbconfig.pool.acquire,
            idle : dbconfig.pool.idle
        },
        define : {
            timestamps : false,
            freezeTableName : true
        }
    }
)

const db = {};

db.sequelizeConnect = sequelizeConnect;
db.sequelize = sequelize;

db.UserInfo = require('./users.models.js')(sequelizeConnect, sequelize);

db.ProductInfo = require('./product.models.js')(sequelizeConnect, sequelize);

db.OfferInfo = require('./offer.models.js')(sequelizeConnect, sequelize);

db.Category = require('./category.models.js')(sequelizeConnect, sequelize);

db.ProductReview = require('./productreview.models.js')(sequelizeConnect, sequelize);

db.WishList = require('./wish.models.js')(sequelizeConnect, sequelize);

db.OrderInfo = require('./order.models.js')(sequelizeConnect, sequelize);

db.InventoryInfo = require('./inventory.models.js')(sequelizeConnect, sequelize);

db.ApplicationInfo = require('./application.models.js')(sequelizeConnect, sequelize);

db.Cart = require('./cart.models.js')(sequelizeConnect, sequelize);

db.EmployeeInfo = require('./employee.models.js')(sequelizeConnect, sequelize);

db.SalaryInfo = require('./salary.models.js')(sequelizeConnect, sequelize);

db.DeliveryInfo = require('./delivery.models.js')(sequelizeConnect, sequelize);

module.exports =  db;