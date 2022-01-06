const db = require('../models/index');

const addEmployee = async (req, res) => {
    const result = await db.Employees.create({ name: req.body.name, age: req.body.age, role: req.body.role });

    return res.status(201).json(result);
};

module.exports = {
    addEmployee
};