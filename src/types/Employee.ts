// export interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   position: string;
//   department: string;
// }

export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  salary: number;
}

export type CreateEmployeeDto = Omit<Employee, "id">;

export type UpdateEmployeeDto = Partial<CreateEmployeeDto>;

