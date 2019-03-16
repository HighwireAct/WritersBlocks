const router = require('express').Router();
const blockRoutes = require('./blocks');
const pieceRoutes = require('./pieces');

router.use("/blocks", blockRoutes);
router.use("/pieces", pieceRoutes);

module.exports = router;