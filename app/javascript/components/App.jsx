import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

const App = () => {
    return (
        <Routes>
          <Route path="/koda-board/login" element={<Login />} />
          <Route path="/koda-board/student/register" element={<Register />} />

          <Route
            path="/koda-board/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/koda-board/login" />} />
        </Routes>
    );
};

export default App;