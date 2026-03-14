import React from "react";
import "./Book.css";

function Book(props) {
  return <li className="book">{props.title}</li>;
}

export default Book;