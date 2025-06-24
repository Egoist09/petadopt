import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import PetCard from '../components/PetCard';

const Dashboard = () => {
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
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pets.length > 0 ? (
          pets.map(pet => (
            <PetCard key={pet._id} pet={pet} onAdopted={handlePetAdopted} />
          ))
        ) : (
          <p className="text-gray-500">No pets available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
