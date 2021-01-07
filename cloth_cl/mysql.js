var mysql      = require('mysql');
var MongoClient = require('mongodb').MongoClient;
var mysqldb;
mysqldb = {
    mysql_pool : mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : '1q2w3e4r',
        database : 'test',
        port : 3306
    })
};
module.exports = mysqldb;

