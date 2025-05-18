import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { listStudents } from "./firebase/student";

export default function StudentsList() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Load students from local storage when the component mounts
    listStudents().then((students) => {
      setStudents(students);
      setIsLoading(false);
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleCreateNewStudent = () => {
    navigate("/student");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Box>
        <Box
          sx={{
            my: 2,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Button variant="contained" onClick={handleCreateNewStudent}>
            Create New Student
          </Button>
        </Box>
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
                    {student.studentId}
                  </TableCell>
                  <TableCell align="left">{student.fullName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
}
