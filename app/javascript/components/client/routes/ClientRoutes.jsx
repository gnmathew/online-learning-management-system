import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home";
import Sessions from "../authentication/Sessions";
import Registrations from "../authentication/Registrations";
import ProtectedRoute from "../authentication/ProtectedRoute";

const ClientRoutes = ({setIsLoggedIn}) => {
    return (
      <Routes>
        <Route path="/koda-board/login" element={<Sessions setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/koda-board/student/register" element={<Registrations setIsLoggedIn={setIsLoggedIn}/>} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
};

export default ClientRoutes;