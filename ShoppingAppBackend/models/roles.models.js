module.exports = (sequelizeConnect, Sequelize) => {
    const Roles = sequelizeConnect.define("roles", {
        role_id : {
            type : Sequelize.INTEGER,
            primaryKey : true
        },
        role_name : {
            type : Sequelize.STRING
        },
        role_descriptions :  {
            type : Sequelize.STRING
        },
        date_of_registration : {
            type : Sequelize.DATE
        }
    })

    return Roles;
}