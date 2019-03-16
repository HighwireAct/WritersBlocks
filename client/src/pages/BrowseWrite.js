import React, { Component } from "react";
import NewBlockPreview from "../components/NewBlockPreview";
import WriteCard from "../components/WriteCard";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/API";

class BrowseWrite extends Component {
    
    state = {
        pieces: []
      }
    
      componentDidMount() {
        this.loadUnfinishedPieces();
      }
    
      loadUnfinishedPieces() {
        API.getUnfinishedPieces()
          .then(res => this.setState({ pieces: res.data }));
      }

render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col size="md-4">
              <NewBlockPreview newblocklink={"/write/new"} />
            </Col>
            {this.state.pieces.map(piece => (
            <Col size="md-4">
            <WriteCard
            id={piece._id}
            key={piece._id}
            title={piece.title}
            excerpt={piece.blocks[piece.blocks.length-1].text}
            authorCount={piece.authorCount}
          />
            </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default BrowseWrite;