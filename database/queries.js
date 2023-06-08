const getAllStudent = () => {
    return `SELECT * FROM students`
};

const getStudentById = (id) => {
    return `SELECT * FROM students where id = ${id}`;
}
module.exports = {
    getAllStudent,
    getStudentById
}