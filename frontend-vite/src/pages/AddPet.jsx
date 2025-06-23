import React, { useState } from 'react';

const AddPet = () => {
  const [pet, setPet] = useState({ name: '', breed: '', description: '', image: '' });

  const handleChange = e => setPet({ ...pet, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitting pet:', pet);
    // Add API call to submit pet
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add a Pet</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={pet.name}
          onChange={handleChange}
          placeholder="Pet Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="breed"
          value={pet.breed}
          onChange={handleChange}
          placeholder="Breed"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="image"
          value={pet.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-2 rounded"
        />
        <textarea
          name="description"
          value={pet.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 rounded"
          required
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default AddPet;
