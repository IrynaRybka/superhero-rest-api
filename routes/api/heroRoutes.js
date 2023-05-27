const express = require('express');

const heroController = require('../../controllers/heroController');
const heroMiddlewares = require('../../middlewares/heroMiddlewares');

const router = express.Router();

router
  .route('/')
  .post(heroMiddlewares.checkHeroData, heroController.createHero)
  .get(heroController.getHeroes);

router.use('/:id', heroMiddlewares.checkHeroId);

router
  .route('/:id')
  .get(heroController.getHeroById)
  .patch(heroMiddlewares.checkHeroData, heroController.updateHeroById)
  .delete(heroController.deleteHeroById);

module.exports = router;
