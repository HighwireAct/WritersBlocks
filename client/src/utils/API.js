import axios from "axios";

export default {
  // Get all of the unfinished pieces from the database
  getUnfinishedPieces() {
    return axios.get('/write');
  },
  getFinishedPieces() {
    return axios.get('/read');
  },
  createPiece(pieceData) {
    return axios.post('/write/new', pieceData);
  },
  createBlock(blockData) {
    return axios.post('/block/new',blockData)
  }
};