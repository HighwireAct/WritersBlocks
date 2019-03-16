import axios from "axios";

export default {
  // Get all of the unfinished pieces from the database
  getUnfinishedPieces() {
    return axios.get('/api/pieces/unfinished');
  },
  getPieceById(pieceId) {
    return axios.get(`/api/pieces/${pieceId}`)
  },
  getFinishedPieces() {
    return axios.get('/api/pieces/finished');
  },
  createPiece(pieceData) {
    return axios.post('/api/pieces', pieceData);
  },
  createBlock(blockData) {
    return axios.post('/api/blocks', blockData);
  }
};