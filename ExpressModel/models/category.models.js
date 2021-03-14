module.exports = (sequelizeConnect, sequelize) => {
    const Category = sequelizeConnect.define('Category', {
        CategoryID : {
            type : sequelize.INTEGER,
            primaryKey : true
        },
        CategoryName : {
            type : sequelize.STRING
        },
        CategoryDescription : {
            type : sequelize.STRING
        },
        CreatedBy : {
            type : sequelize.INTEGER
        },
        UpdatedBy : {
            type : sequelize.INTEGER
        },
        UpdatedInfo : {
            type : sequelize.STRING
        }
    });
    return Category;
}