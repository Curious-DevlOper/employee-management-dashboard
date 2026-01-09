import { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Employee } from "../types/Employee";
import {
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee
} from "../services/employeeService";



const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
    salary: ""
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  // Fetch Employees
  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const res = await getEmployees();
      setEmployees(res);
    } catch (error) {
      console.error("Failed to fetch employees", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Handle Form Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit Form (Create / Update)
  const handleSubmit = async () => {
    const payload = {
      ...form,
      salary: Number(form.salary)
    };

    try {
      if (editingId !== null) {
        await updateEmployee(editingId, payload);
        setEditingId(null);
      } else {
        await createEmployee(payload);
      }

      setForm({
        name: "",
        email: "",
        department: "",
        position: "",
        salary: ""
      });

      fetchEmployees();
    } catch (error) {
      console.error("Save failed", error);
    }
  };

  // Edit Employee
  const handleEdit = (employee: Employee) => {
    setEditingId(employee.id);
    setForm({
      name: employee.name,
      email: employee.email,
      department: employee.department,
      position: employee.position,
      salary: employee.salary.toString()
    });
  };

  // Delete Employee
  const handleDelete = async (id: number) => {
    try {
      await deleteEmployee(id);
      fetchEmployees();
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  // Table Columns
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "department", headerName: "Department", flex: 1 },
    { field: "position", headerName: "Position", flex: 1 },
    { field: "salary", headerName: "Salary", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      width: 220,
      renderCell: params => (
        <Stack direction="row" spacing={1}>
          <Button size="small" variant="outlined" onClick={() => handleEdit(params.row)}>
            Edit
          </Button>
          <Button size="small" variant="contained" color="error" onClick={() => handleDelete(params.row.id)}>
            Delete
          </Button>
        </Stack>
      )
    }
  ];

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Employees
      </Typography>

      {/* Form */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" mb={2}>
          {editingId ? "Edit Employee" : "Add Employee"}
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth />
          <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth />
          <TextField label="Department" name="department" value={form.department} onChange={handleChange} fullWidth />
          <TextField label="Position" name="position" value={form.position} onChange={handleChange} fullWidth />
          <TextField
            label="Salary"
            name="salary"
            type="number"
            value={form.salary}
            onChange={handleChange}
            fullWidth
          />
        </Stack>

        <Stack direction="row" spacing={2} mt={2}>
          <Button variant="contained" onClick={handleSubmit}>
            {editingId ? "Update Employee" : "Create Employee"}
          </Button>

          {editingId !== null && (
            <Button
              variant="outlined"
              color="warning"
              onClick={() => {
                setEditingId(null);
                setForm({ name: "", email: "", department: "", position: "", salary: "" });
              }}
            >
              Cancel
            </Button>
          )}
        </Stack>
      </Paper>

      {/* Table */}
      <Paper sx={{ height: 450 }}>
        <DataGrid
          rows={employees}
          columns={columns}
          loading={loading}
          pageSizeOptions={[5, 10]}
        />
      </Paper>
    </Box>
  );
};

export default Employees;
