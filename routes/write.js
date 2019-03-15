const piecesController = require('../controllers/piecesController');
const blocksController = require('../controllers/blocksController');

const router = require('express').Router();

router.get('/', piecesController.findAllUnfinished);

router.post('/block/new', blocksController.create);

module.exports = router;