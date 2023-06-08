const getAllStudent = `SELECT * FROM students`;
const getStudentById = `SELECT * FROM students where id = $1`;

module.exports = {
    getAllStudent,
    getStudentById
}