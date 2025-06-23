import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">Pet Adoption</Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/add-pet" className="hover:underline">Add Pet</Link>
          <Link to="/login" className="hover:underline">Login / Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
