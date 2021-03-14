module.exports = (sequelizeConnect, sequelize) => {
    const ProductReview = sequelizeConnect.define('ProductReview', {
        ReviewID : {
            type : sequelize.INTEGER,
            primaryKey : true
        },
        ProductID : {
            type : sequelize.INTEGER
        },
        UserID : {
            type : sequelize.INTEGER
        },
        ProductRating : {
            type : sequelize.FLOAT
        },
        ReviewStatus : {
            type : sequelize.STRING
        },
        Comments : {
            type : sequelize.STRING
        }
    });
    return ProductReview;
}