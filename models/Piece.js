const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PieceSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  blocks: [{
    type: Schema.Types.ObjectId,
    ref: 'Block'
  }],
  authorCount: Number
}, {
  timestamps: true
});

const Piece = mongoose.model('Piece', PieceSchema);

module.exports = Piece;