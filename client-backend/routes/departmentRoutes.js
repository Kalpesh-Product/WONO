const router = require("express").Router();
const {
  createDepartment,
  getDepartments,
} = require("../controllers/departmentController");

router.post("/create-department", createDepartment);
router.get("/all-departments", getDepartments);

module.exports = router;
