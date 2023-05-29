const express = require('express');

const heroController = require('../../controllers/heroController');
const heroMiddlewares = require('../../middlewares/heroMiddlewares');

const router = express.Router();

router
  .route('/')
  .post(heroMiddlewares.checkHeroData, heroController.createHero)
  .get(heroController.getHeroes)
  .get(heroController.getPaginationHero);

router.use('/:id', heroMiddlewares.checkHeroId);

router
  .route('/:id')
  .get(heroController.getHeroById)
  .patch(heroMiddlewares.checkHeroData, heroController.updateHeroById)
  .delete(heroController.deleteHeroById);
router
  .route('/update-image')
  .patch(heroMiddlewares.uploadHeroPhoto, heroController.updateImageHero);

module.exports = router;
