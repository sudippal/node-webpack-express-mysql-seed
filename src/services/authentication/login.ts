import { pool, sqlErrorObj, connErrorObj } from '../connection';

export function loginAuth(req, res) {
    pool.getConnection(function(error, connection) {
        if (!error) {
            connection.query('select * from user_master where user_email = ?', [req.body.email], function(err, rows, fields) {
                if (!err) {
                    connection.release();
                    return res.json(rows);
                } else {
                    return res.json(sqlErrorObj);
                }
            });
        } else {
            return res.json(connErrorObj);
        }
    });
}