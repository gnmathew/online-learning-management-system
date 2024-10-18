import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import StudentHome from "./Student/StudentHome";
import Login from "./Login";
import Register from "./Register";

const App = () => {
    return (
        <Routes>
          {/* Public route */}
          <Route path="/koda-board/login" element={<Login />} />
          <Route path="/koda-board/student/register" element={<Register />} />

          {/* Protected routes */}
          <Route
            path="/koda-board/student/home"
            element={
              <ProtectedRoute role="student">
                <StudentHome />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/koda-board/login" />} />
        </Routes>
    );
};

export default App;