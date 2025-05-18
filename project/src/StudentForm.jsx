import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addStudent } from "./firebase/student";

export default function StudentForm() {
  const navigate = useNavigate();

  const initialValues = {
    fullName: "",
    studentId: "",
  };
  const [student, setStudent] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });

    setErrors({ ...errors, [name]: !event.target.validity.valid });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    addStudent(student).then(() => {
      navigate("/students");
    })

    await addStudent(student);
    navigate("/students");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        m: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          error={errors.fullName}
          id="fullName"
          name="fullName"
          label="Full Name"
          variant="outlined"
          value={student.fullName}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          error={errors.studentId}
          id="studentId"
          name="studentId"
          label="Student ID"
          variant="outlined"
          type="number"
          value={student.studentId}
          onChange={handleChange}
          slotProps={{ htmlInput: { min: 101 } }}
          helperText={errors.studentId ? "Student ID must be greater then 101" : ""}
        />
      </div>
      <Button type="submit" variant="contained">
        Save
      </Button>
    </Box>
  );
}
