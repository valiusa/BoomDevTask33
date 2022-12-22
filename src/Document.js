import React from "react";

function Document(props) {
  return (
    <div className="document">
      <h1 className="title">{props.title}</h1>
      <div className="content" onScroll={props.onScroll}>
        {props.content}
      </div>
    </div>
  );
}

export default Document;
