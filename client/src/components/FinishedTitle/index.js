import React, { Component } from "react";




class FinishedTitle extends Component {
    render() {
        return (
            <div>
            <h1 className="finished-title"><strong><i>{this.props.finishedTitle}</i></strong></h1>
            </div>
        )
    }
}

export default FinishedTitle;