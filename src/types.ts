export type Employee = {
  id: number;
  name: string;
  role: string;
};

export type CreateEmployeeRequestBody = {
  name: string;
  role: string;
};

export type ErrorResponse = {
  error: string;
};
