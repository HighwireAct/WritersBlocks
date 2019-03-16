import React, { Component } from "react";
import ReadCard from "../components/ReadCard";
import { Col, Container, Row } from "../components/Grid";
import API from "../utils/API";

class BrowseRead extends Component {
    state = {
      pieces: []
    }

    componentDidMount() {
      API.getFinishedPieces()
        .then(res => this.setState({ pieces: res.data }))
        .catch(err => console.error(err));
    }
    
    render() {
        return (
          <>
          <Container fluid>
            <Row>
              {this.state.pieces.map(piece => (
              <ReadCard
                id={piece._id}
                key={piece._id}
                title={piece.title}
                excerpt={piece.blocks[0].text}
                authorCount={piece.authorCount}
              />
              ))}
            </Row>
          </Container>
        </>
        )
    }
}

export default BrowseRead;