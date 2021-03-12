module.exports = (sequelizeConnect, Sequelize) => {
    const Products = sequelizeConnect.define("product_details", {
        product_detail_id : {
            type : Sequelize.INTEGER,
            primaryKey : true
        },
        product_name : {
            type : Sequelize.STRING
        },
        product_descriptions : {
            type : Sequelize.STRING
        },
        unit_price : {
            type : Sequelize.INTEGER
        },
        brand_name : {
            type : Sequelize.STRING
        },
        category_id : {
            type : Sequelize.INTEGER
        },
        create_timestamp : {
            type : Sequelize.DATE
        },
        created_user_id : {
            type : Sequelize.INTEGER
        },
        updated_timestamp : {
            type : Sequelize.DATE
        },
        updated_user_id : {
            type : Sequelize.INTEGER
        }
    })
    return Products;
};