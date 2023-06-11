const express = require('express');
const router = new express.Router;
const controller = require('../controller');

/**
 * defining the routes
 */
router.get('/students', controller.getStudentsFunc);
router.get('/students/:id', controller.getStudentsByIdFunc);
router.post('/students', controller.addStudentFunc);

module.exports = router;