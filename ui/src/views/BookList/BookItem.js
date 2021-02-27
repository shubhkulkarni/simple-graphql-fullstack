import React from "react";
import "./Booklist.css";

function BookItem({ name, genre }) {
  return (
    <div className="book__item">
      <div className="book__title">{name}</div>
      <div className="book__genre">{genre}</div>
    </div>
  );
}

export default BookItem;
