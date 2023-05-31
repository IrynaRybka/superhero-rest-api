const Hero = require('../models/heroModel');
const ImageService = require('../service/imageService');
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
  const { page, limit } = req.query;
  const heroes = await Hero.find().sort({ createdAt: 1 }).lean();

  const paginationPage = +page || 1;
  const paginationLimit = +limit || 5;
  const skip = (paginationPage - 1) * paginationLimit;

  const heroPagination = heroes.skip(skip).limit(paginationLimit);

  res.status(200).json({
    heroPagination,
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
  } = req.body;

  const updatedHero = await Hero.findByIdAndUpdate(id, {
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
  }, { new: true });

  res.status(200).json({
    hero: updatedHero,
  });
});
/**
 * Update image hero
 */
const updateImageHero = catchAsync(async (req, res) => {
  const { hero, file } = req;
  if (file) {
    hero.images = await ImageService.save(file, { width: 300, height: 300 }, 'images', 'heroes', hero.id);
  }
  Object.keys(req.body).forEach((key) => {
    hero[key] = req.body[key];
  });

  const updatedHero = await hero.save();

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
  updateImageHero,
};
