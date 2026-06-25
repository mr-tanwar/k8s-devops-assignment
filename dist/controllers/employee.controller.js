"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployee = exports.getEmployees = void 0;
const db_1 = require("../config/db");
const getEmployees = async (_req, res) => {
    try {
        const result = await db_1.pool.query("SELECT * FROM employees");
        res.json(result.rows);
    }
    catch (err) {
        const message = err instanceof Error ? err.message : "Something went wrong";
        res.status(500).json({ error: message });
    }
};
exports.getEmployees = getEmployees;
const createEmployee = async (req, res) => {
    const { name, role } = req.body;
    if (!name || !role) {
        res.status(400).json({
            error: "Name and role are required",
        });
        return;
    }
    try {
        const result = await db_1.pool.query("INSERT INTO employees (name, role) VALUES ($1, $2) RETURNING *", [name, role]);
        res.status(201).json(result.rows[0]);
    }
    catch (err) {
        const message = err instanceof Error ? err.message : "Something went wrong";
        res.status(500).json({ error: message });
    }
};
exports.createEmployee = createEmployee;
