const mariadb = require('mariadb/callback');

const connection = mariadb.createConnection({
    host: '127.0.0.1', 
    port: '3307',
    user:'root', 
    password: '',
});

module.exports = connection;