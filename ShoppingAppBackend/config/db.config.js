module.exports = {
    host : 'localhost',
    user : 'root',
    password : 'ragu',
    db : 'shoppingdb',
    dialact : 'mysql',
    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000 
    }
}