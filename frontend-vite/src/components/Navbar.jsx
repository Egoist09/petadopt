import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <div>
        <Link to="/" className="mr-4 font-bold">PetAdopt</Link>
        {token && (
          <Link to="/dashboard" className="mr-4">Dashboard</Link>
        )}
      </div>
      <div>
        {!token ? (
          <>
            <Link to="/login" className="mr-2">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
