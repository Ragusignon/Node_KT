module.exports = (sequelizeConnect, Sequelize) => {
    const Users = sequelizeConnect.define("users", {
        user_id : {
            type : Sequelize.INTEGER,
            primaryKey : true
        },
        user_name : {
            type : Sequelize.STRING
        },
        gender : {
            type : Sequelize.STRING
        },
        phone_number : {
            type : Sequelize.STRING
        },
        address : {
            type : Sequelize.STRING
        },
        password : {
            type : Sequelize.STRING
        },
        blood_group : {
            type : Sequelize.STRING
        },
        date_of_birth : {
            type : Sequelize.DATE
        },
        date_Of_registration : {
            type : Sequelize.DATE
        }
    });

    return Users;
}