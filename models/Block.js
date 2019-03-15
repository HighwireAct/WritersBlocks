const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlockSchema = new Schema({
  text: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Block = mongoose.model('Block', BlockSchema);

module.exports = Block;