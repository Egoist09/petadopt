const express = require('express');
const router = express.Router();
const { getPets, addPet } = require('../controllers/petController');
const protect = require('../middleware/authMiddleware');

router.get('/', getPets);
router.post('/', protect, addPet);

module.exports = router;
