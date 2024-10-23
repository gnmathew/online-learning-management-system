import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({setIsLoggedIn}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false)
    navigate('/koda-board/login');
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
};

export default LogoutButton;