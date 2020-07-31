import React, { Component } from "react";
import Post from "../Post/Post";
import "./Dashboard.css";

let RSSParser = require("rss-parser");

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { postData: null };
  }

  componentDidMount() {
    const getPosts = (error, feed) => {
      if (error) throw error;
      this.setState({ postData: feed.items });
    };

    // access custom fields
    let parser = new RSSParser({
      customFields: {
        item: ["media:content", "category"],
      },
    });

    // get all posts
    parser.parseURL(
      "https://cors-anywhere.herokuapp.com/https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss",
      getPosts
    );
  }

  render() {
    if (this.state.postData) {
      return (
        <div className="dashboard">
          {[...this.state.postData].map((data) => {
            return <Post data={data} key={data.guid}></Post>;
          })}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Retrieving data</h1>
        </div>
      );
    }
  }
}
