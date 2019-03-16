const db = require("../models");

module.exports = {
  create: (req, res) => {
    console.log("Create function called");
    const { text, pieceId } = req.body;
    db.Block.create({ text: text })
      .then(data => {
        console.log("Then method called");
        db.Piece.findOneAndUpdate(
          { _id: pieceId },
          { $push: { blocks: data._id }, $inc: { authorCount: 1 } }
        )
          .then(data => res.json(data))
          .catch(err => res.status(402).json(err));
      })
      .catch(err => res.status(402).json(err));
  }
};
