import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from "@mui/material";
import { getEmployees } from "../services/employeeService";
import { Employee } from "../types/Employee";

const Dashboard = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    getEmployees().then((res) => setEmployees(res));
  }, []);

  const totalEmployees = employees.length;
  const totalDepartments = new Set(
    employees.map(emp => emp.department)
  ).size;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid  size={{ xs:12, md: 4}}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Employees</Typography>
              <Typography variant="h3">{totalEmployees}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs:12, md: 4}}>
          <Card>
            <CardContent>
              <Typography variant="h6">Departments</Typography>
              <Typography variant="h3">{totalDepartments}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs:12, md: 4}}>
          <Card>
            <CardContent>
              <Typography variant="h6">Active Users</Typography>
              <Typography variant="h3">{totalEmployees}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
