import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || (role && userRole !== role)) {
      navigate("/koda-board/login");
    }
  }, [token, userRole, role, navigate]);

  // If the token is present and the role matches, render the children
  return token && (!role || userRole === role) ? children : null;
};

export default ProtectedRoute;
