import React, { Component } from "react";
import Mercury from "@postlight/mercury-parser";
import "./Popup.css";

export default class Popup extends Component {
  constructor() {
    super();
    this.state = {
      content: null,
    };
  }

  componentDidMount() {
    Mercury.parse(
      "https://cors-anywhere.herokuapp.com/" + this.props.link
    ).then((result) => {
      this.setState({ content: result.content });
    });
  }

  render() {
    return (
      <div className="popup">
        <span className="popup_close" onClick={this.props.closePopup}>
          &times;
        </span>
        <div className="popup_inner">
          <div
            dangerouslySetInnerHTML={{ __html: this.state.content }}
            style={{ padding: "20px" }}
          />
        </div>
      </div>
    );
  }
}
