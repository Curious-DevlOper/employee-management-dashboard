import axios from "axios";
import { Employee } from "../types/Employee";

const API_URL = "http://localhost:3001/employees";

export const getEmployees = () =>
  axios.get<Employee[]>(API_URL);

export const addEmployee = (employee: Employee) =>
  axios.post(API_URL, employee);

export const deleteEmployee = (id: number) =>
  axios.delete(`${API_URL}/${id}`);
