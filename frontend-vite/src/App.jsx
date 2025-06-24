import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import PetCard from './components/PetCard';
import axiosInstance from './api/axiosInstance';

import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';
import Dashboard from './pages/Dashboard';
import AddPet from './pages/AddPet';

// ...
const App = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await axiosInstance.get('/pets');
        setPets(res.data);
      } catch (err) {
        console.error('Failed to load pets', err);
      }
    };

    fetchPets();
  }, []);

  const handlePetAdopted = (id) => {
    setPets(prev => prev.filter(pet => pet._id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {pets.map(pet => (
                  <PetCard key={pet._id} pet={pet} onAdopted={handlePetAdopted} />
                ))}
              </div>
            } />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/register" element={<LoginRegister />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/add-pet" 
              element={
                <ProtectedRoute>
                  <AddPet />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};
export default App;
