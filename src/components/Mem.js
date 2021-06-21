import React from "react";

const Article = (props) => {
  return (
    <article>
      <h1>Title: {props.title}</h1>
      <img src={props.img} alt="photo_mem"></img>
      <div class="row">
        <div class="col">
          <h2>Upvotes: {props.upvotes}</h2>
          <button onClick={(e) => this.props.onVote(this.props.id)}>+</button>
        </div>
        <div class="col">
          <h2>Downvotes {props.downvotes}</h2>
          <button onClick={(e) => this.props.onVote(this.props.id)}>-</button>
        </div>
      </div>
    </article>
  );
};

export default Article;
