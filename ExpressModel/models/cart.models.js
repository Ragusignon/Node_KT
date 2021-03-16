module.exports = (sequelizeConnect, sequelize)=> {
    const Cart = sequelizeConnect.define('Cart', {
        CartID : {
            type : sequelize.INTEGER,
            primaryKey : true
        },
        ProductID : {
            type : sequelize.INTEGER
        },
        Quantity : {
             type : sequelize.BIGINT
        },
        Price : {
            type : sequelize.DOUBLE(14, 2)
        },
        CartStatus : {
            type : sequelize.STRING
        }
    });
    return Cart;
}