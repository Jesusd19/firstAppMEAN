const employeesModels = require('../models/employee.model')
const employeeControl = {};

employeeControl.getEmployees = async (req, res) => {
    const employee = await employeesModels.find();
    res.json(employee);
}

employeeControl.ceateEmployee = async (req, res) => {
    const employee = new employeesModels(req.body)
    await employee.save();
    res.json({
        'status': 'Employee Saved'
    });
}

employeeControl.getEmployee = async (req, res) => {
    const employee = await employeesModels.findById(req.params.id);
    res.json(employee);
}

employeeControl.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await employeesModels.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({
        'status': 'Employee Update'
    })
}

employeeControl.deleteEmployee = async (req, res) => {
    await employeesModels.findByIdAndRemove(req.params.id)
    res.json({
        'status': 'Employee Deleted'
    });
}
module.exports = employeeControl;