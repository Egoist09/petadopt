import React from 'react';

const PetCard = ({ pet }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
      <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{pet.name}</h3>
        <p className="text-gray-600">{pet.breed}</p>
        <p className="text-sm text-gray-500">{pet.description}</p>
      </div>
    </div>
  );
};

export default PetCard;
