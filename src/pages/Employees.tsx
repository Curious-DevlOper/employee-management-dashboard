

import {
  Box,
  Typography,
  Button,
  Breadcrumbs,
  Link,
  Paper,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "department", headerName: "Department", flex: 1 },
  { field: "contact", headerName: "Contact", flex: 1 },
  { field: "hireDate", headerName: "Hire Date", flex: 1 },
];

const rows = [
  {
    id: 1,
    name: "Ethan Antonio",
    department: "Admin",
    contact: "admin@centrovo.com",
    hireDate: "2019-06-06",
  },
];

const Employees = () => {
  return (
    <Box>
      {/* Breadcrumb */}
      <Breadcrumbs sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit">
          Home
        </Link>
        <Typography color="text.primary">Employees</Typography>
      </Breadcrumbs>

      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" fontWeight={600}>
          Company Employees
        </Typography>

        <Box>
          <Button variant="outlined" sx={{ mr: 1 }}>
            Import Employees
          </Button>
          <Button variant="contained">
            Add Employees
          </Button>
        </Box>
      </Box>

      {/* Table */}
      <Paper sx={{ height: 500 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          disableRowSelectionOnClick
        />
      </Paper>
    </Box>
  );
};

export default Employees;
