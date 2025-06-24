const express = require('express');
const router = express.Router();
const { getPets, addPet } = require('../controllers/petController');
const protect = require('../middleware/authMiddleware');

router.get('/', getPets);              // GET /api/pets
router.post('/', protect, addPet);     // POST /api/pets (protected)

module.exports = router;
