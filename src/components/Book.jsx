import React from "react";
import "../assets/Book.css";


const Book = (props) => (
   <li className="book">{props.title}</li>
)

export default Book;