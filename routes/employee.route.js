const { Router } = require('express');
const { addEmployee } = require('../controller/employee.controller');

const router = Router();

// router.get('/:id', getEmployee);
router.post('/', addEmployee);


module.exports = router;