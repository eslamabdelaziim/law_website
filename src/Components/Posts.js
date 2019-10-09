import React, { Component } from "react";
import { Link } from "react-router-dom";

class Posts extends Component {
  render() {
    const postsList = this.props.posts.length ? (
      this.props.posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={"/Post/" + post.id}>
                <span className="card-title">{post.qs}</span>
              </Link>
              <p className="red-text darken-3">{post.ans || "...a7a..."}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">there is no posts</div>
    );
    return <div className="container">{postsList}</div>;
  }
}

export default Posts;
