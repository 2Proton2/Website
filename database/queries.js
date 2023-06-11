const getAllStudent = `SELECT * FROM students`;
const getStudentById = `SELECT * FROM students where id = ?`;
const emailValidator = `SELECT s FROM students as s where s.email = ?`;
const addStudent = `INSERT INTO students (name, email, age, dob) VALUES (?, ?, ?, ?)`;

module.exports = {
    getAllStudent,
    getStudentById,
    emailValidator,
    addStudent
}