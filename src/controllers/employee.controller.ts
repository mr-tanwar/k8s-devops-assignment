import { Request, Response } from "express";
import { QueryResult } from "pg";

import { pool } from "../config/db";
import { CreateEmployeeRequestBody, Employee, ErrorResponse } from "../types";

export const getEmployees = async (
  _req: Request,
  res: Response<Employee[] | ErrorResponse>,
): Promise<void> => {
  try {
    const result: QueryResult<Employee> = await pool.query<Employee>(
      "SELECT * FROM employees",
    );

    res.json(result.rows);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Something went wrong";

    res.status(500).json({ error: message });
  }
};

export const createEmployee = async (
  req: Request<unknown, unknown, CreateEmployeeRequestBody>,
  res: Response<Employee | ErrorResponse>,
): Promise<void> => {
  const { name, role } = req.body;

  if (!name || !role) {
    res.status(400).json({
      error: "Name and role are required",
    });
    return;
  }

  try {
    const result: QueryResult<Employee> = await pool.query<Employee>(
      "INSERT INTO employees (name, role) VALUES ($1, $2) RETURNING *",
      [name, role],
    );

    res.status(201).json(result.rows[0]);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Something went wrong";

    res.status(500).json({ error: message });
  }
};
