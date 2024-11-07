const Department = require("../models/Department");

const createDepartment = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ message: "invalid data" });
    }

    const newDepartment = new Department({
      name,
      description,
    });

    await newDepartment.save();
    res.status(201).json({ message: "successfully created a new Department" });
  } catch (error) {
    next(error);
  }
};

const getDepartments = async (req, res, next) => {
  try {
    const departments = await Department.find().lean().exec();
    if (!departments) {
      return res.status(404).json({ message: "No departments found" });
    }
    res.status(200).json(departments);
  } catch (error) {
    next(error);
  }
};

module.exports = { createDepartment,getDepartments };
