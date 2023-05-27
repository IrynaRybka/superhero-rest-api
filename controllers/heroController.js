const Hero = require('../models/heroModel');
const { catchAsync } = require('../utils');

/**
 * Create hero
 */
const createHero = catchAsync(async (req, res) => {
  const {
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images
  } = req.body;

  const newHero = await Hero.create({
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  });

  res.status(201).json({
    hero: newHero,
  });
});

/**
 * get list heroes
 */
const getHeroes = catchAsync(async (req, res) => {
  const heroes = await Hero.find().sort({ createdAt: 1 }).lean();

  res.status(200).json({
    heroes,
  });
});

/**
 * Get hero by id.
 */
const getHeroById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const hero = await Hero.findById(id);

  res.status(200).json({
    hero,
  });
});
/**
 * Update hero by id.
 */
const updateHeroById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const {
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
 } = req.body;

  const updatedHero = await Hero.findByIdAndUpdate(id, {
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  }, { new: true });

  res.status(200).json({
    hero: updatedHero,
  });
});

/**
 * Delete hero by id.
 */
const deleteHeroById = catchAsync(async (req, res) => {
  const { id } = req.params;

  await Hero.findByIdAndDelete(id);

  res.sendStatus(204);
});

module.exports = {
  createHero,
  getHeroes,
  getHeroById,
  updateHeroById,
  deleteHeroById,
};
