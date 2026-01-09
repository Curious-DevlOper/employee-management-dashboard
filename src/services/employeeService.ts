import axios from "axios";
import { CreateEmployeeDto, Employee } from "../types/Employee";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

const EMPLOYEE_ENDPOINT = "/employees";

// Get all employees
export const getEmployees = () =>
  api.get<Employee[]>(EMPLOYEE_ENDPOINT).then(res => res.data);

// Create employee
export const createEmployee = (employee: CreateEmployeeDto) =>
  api.post<Employee>(EMPLOYEE_ENDPOINT, employee).then(res => res.data);

// Update employee
export const updateEmployee = (id: number, employee: Partial<Employee>) =>
  api.put<Employee>(`${EMPLOYEE_ENDPOINT}/${id}`, employee).then(res => res.data);

// Delete employee
export const deleteEmployee = (id: number) =>
  api.delete(`${EMPLOYEE_ENDPOINT}/${id}`).then(res => res.data);
