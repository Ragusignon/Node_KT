module.exports = (sequelizeConnect, sequelize)=> {
    const ApplicationInfo = sequelizeConnect.define('ApplicationInfo', {
        ApplicationID : {
            type : sequelize.INTEGER,
            primaryKey : true
        },
        FirstName : {
            type : sequelize.STRING
        },
        LastName : {
            type : sequelize.STRING
        },
        Age : {
            type : sequelize.INTEGER
        },
        Gender : {
            type : sequelize.STRING
        },
        Mobile : {
            type : sequelize.BIGINT
        },
        Email : {
            type : sequelize.STRING
        },
        Addres : {
            type : sequelize.STRING
        },
        ApplicantRole : {
            type : sequelize.STRING
        },
        StartAt : {
            type : sequelize.STRING
        },
        EndAt : {
            type : sequelize.STRING
        },
        SpecializedIn : {
            type : sequelize.STRING
        },
        Experience : {
            type : sequelize.INTEGER
        }
    });
    return ApplicationInfo;
}