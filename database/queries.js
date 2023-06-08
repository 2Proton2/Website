const getAllStudent = `SELECT * FROM students`;
const getStudentById = `SELECT * FROM students where id = $1`;
const emailValidator = `SELECT s FROM students as s where s.email = $1`;
const addStudent = `INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)`;

module.exports = {
    getAllStudent,
    getStudentById,
    emailValidator,
    addStudent
}