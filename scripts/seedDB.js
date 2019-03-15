const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/writersblocks",
  {
    useNewUrlParser: true
  }
);

const piecesSeed = [
  {
    title: "The Little App That Could",
    blocks: [],
    authorCount: 0
  },
  {
    title: "Another Piece for Good Measure",
    blocks: [],
    authorCount: 0
  }
]

db.Block
  .remove({})
  .then(() => db.Piece.collection.insertMany(piecesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
