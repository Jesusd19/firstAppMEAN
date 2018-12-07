const express = require('express');
const router = express.Router();

const employeeControl = require('../controllers/employee.controller'); 

router.get('/', employeeControl.getEmployees);
router.post('/', employeeControl.ceateEmployee);
router.get('/:id', employeeControl.getEmployee);
router.put('/:id', employeeControl.updateEmployee);
router.delete('/:id', employeeControl.deleteEmployee);


module.exports = {
    router
};
