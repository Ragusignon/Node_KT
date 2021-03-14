module.exports = (sequelizeConnect, sequelize) => {
    const UserInfo = sequelizeConnect.define('UserInfo', {
        UserID : {
            type : sequelize.INTEGER,
            primaryKey : true
        },
        UserName : {
            type : sequelize.STRING
        },
        Mobile : {
            type : sequelize.BIGINT
        },
        DateOfBirth : {
            type : sequelize.DATE
        },
        Email : {
            type : sequelize.STRING
        },
        Address : {
            type : sequelize.STRING
        },
        LoginPassword : {
            type : sequelize.STRING
        },
        BloodGroup : {
            type : sequelize.STRING
        },
        BloodDonate : {
            type : sequelize.STRING
        },
        UserRating : {
            type : sequelize.FLOAT
        },
        UpdatedInfo : {
            type : sequelize.STRING
        }
    });

    return UserInfo;
}