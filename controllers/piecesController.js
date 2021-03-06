const db = require('../models');

module.exports = {
  findAllUnfinished: (req, res) => {
    db.Piece
      .find({ authorCount: { $lt: 5 } })
      .sort({ updatedAt: -1 })
      .populate('blocks')
      .then(data => res.json(data))
      .catch(err => res.status(402).json(err));
  },
  findAllFinished: (req, res) => {
    db.Piece
      .find({ authorCount: 5 })
      .sort({ updatedAt: -1 })
      .populate('blocks')
      .then(data => res.json(data))
      .catch(err => res.status(402).json(err));
  },
  findPieceById: (req, res) => {
    db.Piece
      .findById(req.params.id)
      .populate('blocks')
      .then(data => res.json(data))
      .catch(err => res.status(402).json(err));
  },
  // Create a new piece
  create: (req, res) => {
    db.Piece
      .create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(402).json(err));
  }
}