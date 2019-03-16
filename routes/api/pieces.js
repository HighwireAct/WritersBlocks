const piecesController = require('../../controllers/piecesController');
const blocksController = require('../../controllers/blocksController')

const router = require('express').Router();

router.route('/')
      .post(piecesController.create);

router.route('/finished')
      .get(piecesController.findAllFinished);

router.route('/unfinished')
      .get(piecesController.findAllUnfinished);

router.route('/:id')
      .get(piecesController.findPieceById)
      .post(blocksController.create);

module.exports = router;