import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/api/v1/${role}/sessions`, {
        user: {
          email,
          password
        }
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.user.role)
      navigate('/koda-board/home');
      
      console.log('Login Successfully');
    } catch (error) {
      console.error('Login failed', error);
      setError('Invalid email or password');
    }
  };

  const buttonClass = role === 'student' ? 'btn-success' : 'btn-secondary';

  return (
    <>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="col-md-6 offset-md-10">
          <h2 className="mb-4 text-center">Koda Board Login in</h2>
          <form onSubmit={handleLogin}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="mb-5">
              <select className="form-select form-select-sm" value={role} onChange={(e) => setRole(e.target.value)}>
                <option defaultValue value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            <button type="submit" className={`btn ${buttonClass} w-100`}>Login</button>
          </form>
          <Link to="/koda-board/student/register" className="btn btn-link text-decoration-none">
            Register as Student in Koda Board
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
