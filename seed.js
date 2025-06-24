const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Pet = require('./models/Pet');

dotenv.config();
connectDB();

const seedPets = async () => {
  try {
    await Pet.deleteMany();

    await Pet.insertMany([
  { name: 'Buddy', imageUrl: 'https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Mittens', imageUrl: 'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Charlie', imageUrl: 'https://placedog.net/400/300?id=2' },
  { name: 'Luna', imageUrl: 'https://placekitten.com/401/300' },
  { name: 'Max', imageUrl: 'https://placedog.net/400/300?id=3' },
  { name: 'Bella', imageUrl: 'https://placekitten.com/400/301' }
]);

    console.log('✅ Pets seeded successfully!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedPets();
