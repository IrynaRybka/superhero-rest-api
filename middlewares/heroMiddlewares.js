const {
  Types: { ObjectId },
} = require('mongoose');

const Hero = require('../models/heroModel');

const { AppError, catchAsync, validators } = require('../utils');

const ImageService = require('../service/imageService');

exports.checkHeroData = catchAsync(async (req, res, next) => {
  // Check new hero data.
  const { error, value } = validators.createHeroValidator(req.body);

  if (error) return next(new AppError(400, error.details[0].message));

  const { nickname } = value;

  const heroExists = await Hero.exists({ nickname });

  if (heroExists) return next(new AppError(409, 'User with this nickname already exists..'));

  req.body = value;

  next();
});

/**
 * Check hero id.
 */
exports.checkHeroId = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  // check if id is valid
  if (!ObjectId.isValid(id)) {
    return next(new AppError(400, 'Invalid hero id..'));
  }

  const heroExists = await Hero.exists({ _id: id });

  if (!heroExists) return next(new AppError(404, 'Hero not found..'));

  next();
});

exports.uploadHeroPhoto = ImageService.upload('images');
