import React from "react";
import Book from "./Book";

function BookList() {
  return (
    <ul>
      <Book title="The Holy Bible" />
      <Book title="Think And Grow Rich" />
      <Book title="The Richest Man in Babylon" />
    </ul>
  );
}

export default BookList;