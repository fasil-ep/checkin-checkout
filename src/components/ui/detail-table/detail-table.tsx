import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "checkIn", headerName: "Check In", width: 130 },
  { field: "checkOut", headerName: "Check Out", width: 130 },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    checkIn: "2022/02/10 10:20:00",
    checkOut: "2022/02/10 10:20:00",
  },

  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    checkIn: "2022/02/10 10:20:00",
    checkOut: "2022/02/10 10:20:00",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    checkIn: "2022/02/10 10:20:00",
    checkOut: "2022/02/10 10:20:00",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    checkIn: "2022/02/10 10:20:00",
    checkOut: "2022/02/10 10:20:00",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    checkIn: "2022/02/10 10:20:00",
    checkOut: "2022/02/10 10:20:00",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    age: 150,
    checkIn: "2022/02/10 10:20:00",
    checkOut: "2022/02/10 10:20:00",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    checkIn: "2022/02/10 10:20:00",
    checkOut: "2022/02/10 10:20:00",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    checkIn: "2022/02/10 10:20:00",
    checkOut: "2022/02/10 10:20:00",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    checkIn: "2022/02/10 10:20:00",
    checkOut: "2022/02/10 10:20:00",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Stack
        sx={{
          color: "#007CC2",
          fontSize: "25px",
          textAlign: "center",
          pt: 3,
          pb: 3,
        }}
      >
        Check-In Check-Out Details
      </Stack>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
