const Pet = require('../models/Pet');

exports.getPets = async (req, res) => {
  try {
    const pets = await Pet.find().populate('shelter', 'name email');
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addPet = async (req, res) => {
  try {
    const pet = await Pet.create({ ...req.body, shelter: req.user.id });
    res.json(pet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
