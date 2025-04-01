import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function StudentsList() {
  const students = [
    { id: 1, fullName: "John Doe" },
    { id: 2, fullName: "Jane Smith" },
    { id: 3, fullName: "Peter Jones" },
    { id: 4, fullName: "Alice Williams" },
    { id: 5, fullName: "Bob Brown" },
  ];

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Full Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell component="th" scope="row">
                {student.id}
              </TableCell>
              <TableCell align="left">{student.fullName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
