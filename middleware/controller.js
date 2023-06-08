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
    try{
        Pool.query(queryToDatabase.getAllStudent, (err, results) => {
            _handlyQueryResult(res, err, results)
        });
    }
    catch(err){
        console.log(err);
    }
};

const getStudentsByIdFunc = async(req, res) => {
    try{
        let _id = req.params.id;
        Pool.query(queryToDatabase.getStudentById, [_id], (err, results) => {
            _handlyQueryResult(res, err, results)
        })
    }
    catch(err){
        console.log(err);
    }
};

const addStudentFunc = async(req, res) => {
    try{
        let {name, email, age, dob} =  req.body;
        Pool.query(queryToDatabase.emailValidator, [email], (err, results) => {
            if(err) throw err;
            if(results.rows.length){
                res.send('EMAIL ALREADY EXISTS. PLEASE ENTER UNIQUE EMAIL ID');
            }
            else{
                Pool.query(queryToDatabase.addStudent, [name, email, age, dob], (_handlyQueryResult(res, err, results)));
            }
        })

    }
    catch(err){
        console.log(err);
    }
}

function _handlyQueryResult(res, err, results){
    if(err) throw err;
    res.status(200)
    res.send(results.rows);

    return null;
}
module.exports = {
    getStudentsFunc,
    getStudentsByIdFunc,
    addStudentFunc
}