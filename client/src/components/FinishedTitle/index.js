import React, { Component } from "react";




class FinishedTitle extends Component {
    render() {
        return (
            <div>
            <h1 className="finished-title">{this.props.finishedTitle}</h1>
            </div>
        )
    }
}

export default FinishedTitle;