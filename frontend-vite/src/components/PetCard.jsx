import React from 'react';

const PetCard = ({ pet }) => {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center">
      <img 
        src={pet.image} 
        alt={pet.name} 
        className="w-full h-48 object-cover rounded mb-2" 
      />
      <h3 className="text-lg font-semibold mb-2">{pet.name}</h3>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Adopt Now
      </button>
    </div>
  );
};

export default PetCard;
