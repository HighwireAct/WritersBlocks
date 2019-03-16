import React, { Component } from "react";
import CompleteStory from "../components/CompleteStory";
import {Container, Row, Col} from "../components/Grid";
import FinishedTitle from "../components/FinishedTitle";
import "./textEditorStyle.css";
import API from "../utils/API"


class ReadDetail extends Component {
  state = {
    title: "",
    story: "",
    pieceId: this.props.match.params.id
  }

  componentDidMount() {
    API.getPieceById(this.state.pieceId)
      .then(res => {
        const { pieceId } = this.state;
        const blocks = res.data.blocks;
        let story = "";
        blocks.forEach(block => {
          story += block.text + " ";
        })

        this.setState({ 
          title: res.data.title, 
          story: story, 
          pieceId: pieceId });
      })
      .catch(err => console.error(err));
  }

  render() {
      return (
          <>
          <Container fluid>
              <Row>
              <Col size="md-6">
              <FinishedTitle finishedTitle={this.state.title} />
              <CompleteStory completedStory={this.state.story} />
              </Col>
              </Row>
          </Container>
          </>
      )
  }
}

export default ReadDetail;