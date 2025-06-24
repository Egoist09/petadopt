import React from 'react';
import axiosInstance from '../api/axiosInstance';

const PetCard = ({ pet, onAdopted }) => {
  const token = localStorage.getItem('token');

  const handleAdopt = async () => {
    try {
      await axiosInstance.post('/pets', {
        name: pet.name,
        image: pet.image,
      });
      // ✅ Call parent to remove pet from UI
      onAdopted(pet._id);
      // ✅ Show toast
      showToast(`You adopted ${pet.name}!`, 'success');
    } catch (err) {
      console.error('Adoption failed', err);
      showToast('Failed to adopt pet', 'error');
    }
  };

  const showToast = (message, type) => {
    const toast = document.createElement('div');
    toast.innerText = message;
    toast.className = `fixed bottom-4 right-4 px-4 py-2 rounded shadow text-white ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  };

  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center">
      <img 
        src={pet.image} 
        alt={pet.name} 
        className="w-full h-48 object-cover rounded mb-2" 
      />
      <h3 className="text-lg font-semibold mb-2">{pet.name}</h3>
      {token ? (
        <button 
          onClick={handleAdopt}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Adopt Now
        </button>
      ) : (
        <p className="text-sm text-gray-500">Login to adopt</p>
      )}
    </div>
  );
};

export default PetCard;
