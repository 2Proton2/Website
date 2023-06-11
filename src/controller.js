/**
 * calling the DB config
 * getting the DB Queries
 */
const database = require('../database/conn');
const queryToDatabase = require('../database/queries');

/**
 * here all the functions are defined
 */
const getStudentsFunc = async(req, res) => {
    try{
        let result = await database.raw(queryToDatabase.getAllStudent);
        res.status(200)
        res.send(result.rows);
    }
    catch(err){
        console.log(err);
    }
};

const getStudentsByIdFunc = async(req, res) => {
    try{
        let _id = req.params.id;
        let result = await database.raw(queryToDatabase.getStudentById, [_id]);
        res.status(200)
        res.send(result.rows);
    }
    catch(err){
        console.log(err);
    }
};

const addStudentFunc = async(req, res) => {
    try{
        let {name, email, age, dob} =  req.body;
        let result = await database.raw(queryToDatabase.emailValidator, [email]);
        if(result.rows.length){
            res.send('EMAIL ALREADY EXISTS. PLEASE ENTER UNIQUE EMAIL ID');
        }
        else{
            let creating = await database.raw(queryToDatabase.addStudent, [name, email, age, dob]);
            console.log(`inserted rows in database ${creating.rowCount}`);
            res.status(201)
            res.send(result.rows);
        }

    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    getStudentsFunc,
    getStudentsByIdFunc,
    addStudentFunc
}