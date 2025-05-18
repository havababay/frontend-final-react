import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Help from "./Help.jsx";
import StudentsList from "./StudentsList.jsx";
import StudentForm from "./StudentForm.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/student" element={<StudentForm />} />
      </Routes>
    </>
  );
}

export default App;
