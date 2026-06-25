"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_controller_1 = require("../controllers/employee.controller");
const router = (0, express_1.Router)();
router.get("/", employee_controller_1.getEmployees);
router.post("/", employee_controller_1.createEmployee);
exports.default = router;
