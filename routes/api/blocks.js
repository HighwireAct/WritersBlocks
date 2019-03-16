const blocksController = require('../../controllers/blocksController');

const router = require('express').Router();

router.route('/blocks')
      .post(blocksController.create);

module.exports = router;