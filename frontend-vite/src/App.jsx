import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import PetCard from './components/PetCard';

import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';
import Dashboard from './pages/Dashboard';
import AddPet from './pages/AddPet';

const App = () => {
  // Example static pet data
  const pets = [
    { id: 1, name: 'Buddy', image: 'https://placedog.net/400/300?id=1' },
    { id: 2, name: 'Luna', image: 'https://placedog.net/400/300?id=2' },
    { id: 3, name: 'Charlie', image: 'https://placedog.net/400/300?id=3' },
    { id: 4, name: 'Max', image: 'https://placedog.net/400/300?id=4' },
    { id: 5, name: 'Bella', image: 'https://placedog.net/400/300?id=5' },
    { id: 6, name: 'Daisy', image: 'https://placedog.net/400/300?id=6' },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {pets.map(pet => (
                  <PetCard key={pet.id} pet={pet} />
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
