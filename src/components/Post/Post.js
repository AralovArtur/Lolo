import React, { Component } from "react";
import Popup from "../Popup/Popup";
import "./Post.css";

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }

  handlePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  };

  render() {
    return (
      <div className="post">
        <h1 onClick={this.handlePopup}>{this.props.data.title}</h1>

        {this.props.data["media:content"]?.$.url ? (
          <img
            className="image"
            onClick={this.handlePopup}
            src={this.props.data["media:content"].$.url}
            alt=""
          ></img>
        ) : null}

        <p onClick={this.handlePopup}>{this.props.data.content}</p>

        <div className="footer">
          <p>{this.props.data.pubDate}</p>
          <p>{this.props.data.category}</p>
        </div>

        {this.state.showPopup ? (
          <Popup closePopup={this.handlePopup} link={this.props.data.link} />
        ) : null}
      </div>
    );
  }
}
