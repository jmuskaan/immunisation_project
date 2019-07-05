const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'userdb',
    password: 'userdb',
    database: 'userdb'
})

connection.query(
    `CREATE TABLE IF NOT EXISTS users (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        cname VARCHAR(50) NOT NULL,
        dob DATE NOT NULL,
        uname VARCHAR(30) NOT NULL,
        pwd VARCHAR(30) NOT NULL
    )`,
    function(err, results) {
        if (err) {
            console.error(err)
        } else {
            console.log("Table created successfully")
        }
    }
)

function getAllPersons () {

    return new Promise(function (resolve, reject) {
        connection.query(
            `SELECT * FROM users`,
            function(err, rows, cols) {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            }
        )
    })
}

function addNewPerson(cname,dob,uname,pwd) {

    return new Promise (function(resolve, reject) {
        connection.query(
            `INSERT INTO users (cname,dob,uname,pwd) VALUES (?, ?, ?,?)`,
            [cname,dob,uname,pwd],
            function(err, results) {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            }
        )
    })
}

exports = module.exports = {
    getAllPersons,
    addNewPerson
}