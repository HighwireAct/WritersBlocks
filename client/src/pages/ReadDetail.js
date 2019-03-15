import React, { Component } from "react";
import CompleteStory from "../components/CompleteStory";
import {Container, Row, Col} from "../components/Grid";
import FinishedTitle from "../components/FinishedTitle";
import "./textEditorStyle.css";



class ReadDetail extends Component {
    render() {
        return (
            <>
            <Container fluid>
                <Row>
                <Col size="md-6">
                <FinishedTitle finishedTitle={"Sample Title"} />
                <CompleteStory completedStory={"This is a complete story. This is a complete story.This is a complete story.This is a complete story.This is a complete story.This is a complete story.This is a complete story.This is a complete story.This is a complete story."} />
                </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default ReadDetail;