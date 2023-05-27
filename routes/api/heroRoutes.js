const express = require('express');

const heroController = require('../../controllers/heroController');

const router = express.Router();

router
  .route('/')
  .post(heroController.createHero)
  .get(heroController.getHeroes);

router
  .route('/:id')
  .get(heroController.getHeroById)
  .patch(heroController.updateHeroById)
  .delete(heroController.deleteHeroById);

module.exports = router;
