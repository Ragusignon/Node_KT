module.exports = (sequelizeConnect, sequelize)=> {
    const DeliveryInfo = sequelizeConnect.define('DeliveryInfo', {
        DeliveryID : {
            type : sequelize.INTEGER
        },
        EmployeeID : {
            type : sequelize.INTEGER
        },
        OrderID : {
            type : sequelize.INTEGER
        },
        PaymentType : {
            type : sequelize.STRING
        },
        DeliveredAt : {
            type : sequelize.STRING
        },
        DeliveryAddress : {
            type : sequelize.STRING
        },
        ShippingAddress : {
            type : sequelize.STRING
        }
    });
    return DeliveryInfo;
}