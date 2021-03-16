module.exports = (sequelizeConnect, sequelize) => {

    const OrderInfo = sequelizeConnect.define('OrderInfo', {

        OrderID : {
            type : sequelize.INTEGER,
            primaryKey : true
        },
        UserID : {
            type : sequelize.INTEGER,
        },
        ProductID : {
            type : sequelize.INTEGER
        },
        TotalQuantity : {
            type : sequelize.BIGINT
        },
        TotalPrice : {
            type : sequelize.DOUBLE
        },
        Discount : {
            type : sequelize.STRING
        },
        OrderStatus : {
            type : sequelize.STRING
        }
    })
    return OrderInfo;
}