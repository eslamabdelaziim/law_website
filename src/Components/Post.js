import React, { Component } from "react";
const posts = [
  {
    id: 1,
    qs: "a7a1?",
    ans: "kosmk"
  },
  {
    id: 2,
    qs: "a7a1?",
    ans: "kosmk"
  },
  {
    id: 3,
    qs: "a7a1?",
    ans: "kosmk"
  },
  {
    id: 4,
    qs: "a7a1?",
    ans: "kosmk"
  },
  {
    id: 5,
    qs: "a7a1?",
    ans: "kosmk"
  },
  {
    id: 6,
    qs: "a7a1?",
    ans: "kosmk"
  },
  {
    id: 7,
    qs: "a7a1?",
    ans: "kosmk"
  },
  {
    id: 8,
    qs: "a7a1?",
    ans: "kosmk"
  },
  {
    id: 9,
    qs: "a7a1?",
    ans: "kosmk"
  },
  {
    id: 10,
    qs: "a7a1?",
    ans: "kosmk"
  }
];
class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    this.setState(
      {
        post: posts.find(i => {
          return i.id.toString() === id;
        })
      },
      () => {
        console.log(this.state);
      }
    );
  }
  render() {
    const post = this.state.post ? (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title text-black">{this.state.post.qs}</span>
            <p>{this.state.post.ans}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
          </div>
        </div>
      </div>
    ) : (
      <div className="center"> post is loading...</div>
    );
    return <div className="container center">{post}</div>;
  }
}


export default Post;