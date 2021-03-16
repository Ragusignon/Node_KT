module.exports = (sequelizeConnect, sequelize) => {
    const WishList = sequelizeConnect.define('WishList', {

        WishListID : {
            type : sequelize.INTEGER,
            primaryKey : true
        },
        UserID : {
            type : sequelize.INTEGER
        },
        ProductID : {
            type : sequelize.INTEGER
        },
    })
    return WishList;
}