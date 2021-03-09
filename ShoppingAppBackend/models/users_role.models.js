module.exports = (sequelizeConnect, Sequelize) => {
    const Users_Role = sequelizeConnect.define("users_role", {
        user_role_id : {
            type : Sequelize.INTEGER,
            primaryKey : true
        },
        user_id : {
            type : Sequelize.INTEGER
        },
        role_id : {
            type : Sequelize.INTEGER
        },
        data_of_mapping : {
            type : Sequelize.DATE
        }
    });

    return Users_Role;
}