import React from "react";
import "./Booklist.css";
import bookicon from "../../../src/assets/book.svg";
function BookItem({ name, genre, ...props }) {
  return (
    <div className="book__item" {...props}>
      <div className="book__logo">
        <img src={bookicon} className="book__img" />
      </div>
      <div className="book__title">{name}</div>
      <div className="book__genre">{genre}</div>
    </div>
  );
}

export default BookItem;
