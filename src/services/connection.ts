const mysql = require('mysql');
export const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'password',
  database        : 'your_db_name'
});

export const sqlErrorObj = {
  status: '500',
  message: 'Unknown exception'
}

export const connErrorObj = {
  status: '501',
  message: 'Unknown exception'
}