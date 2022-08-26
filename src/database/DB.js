import mysql2 from 'mysql2';
import config from './../config';


const connection= mysql2.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
});


connection.connect();


module.exports = connection;
