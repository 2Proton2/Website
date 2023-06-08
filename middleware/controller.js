/**
 * calling the DB config
 * getting the DB Queries
 */
const Pool = require('../database/conn');
const queryToDatabase = require('../database/queries');

/**
 * here all the functions are defined
 */
const getStudentsFunc = async(req, res) => {
    Pool.query(queryToDatabase.getAllStudent(), (err, results) => {
        if(err) throw err;
        res.send(results.rows)
    });
}

const getStudentsByIdFunc = async(req, res) => {
    let _id = req.params.id;
    Pool.query(queryToDatabase.getStudentById(_id),(err, results) => {
        if(err) throw err;
        res.send(results.rows)
    })
};

module.exports = {
    getStudentsFunc,
    getStudentsByIdFunc
}