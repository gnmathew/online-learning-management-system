import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home";
import Sessions from "../authentication/Sessions";
import Registrations from "../authentication/Registrations";
import ProtectedRoute from "../authentication/ProtectedRoute";

const ClientRoutes = () => {
    return (
      <Routes>
        <Route path="/koda-board/login" element={<Sessions />} />
        <Route path="/koda-board/student/register" element={<Registrations />} />

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

export default ClientRoutes;