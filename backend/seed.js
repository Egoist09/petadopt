const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Pet = require('./models/Pet');

dotenv.config();
connectDB();

const seedPets = async () => {
  try {
    await Pet.deleteMany(); // Clear existing pets

    await Pet.insertMany([
      { name: 'Buddy', image: 'https://placedog.net/400/300?id=1' },
      { name: 'Mittens', image: 'https://placekitten.com/400/300' },
      { name: 'Charlie', image: 'https://placedog.net/400/300?id=2' },
      { name: 'Luna', image: 'https://placekitten.com/401/300' },
      { name: 'Max', image: 'https://placedog.net/400/300?id=3' },
      { name: 'Bella', image: 'https://placekitten.com/400/301' },
    ]);

    console.log('✅ Pets seeded successfully!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedPets();
