import React from "react";
import "./BookDetails.css";
function BookDetails({ name, genre, author }) {
  return name ? (
    <div className="book__details">
      <div className="banner">
        <img
          src="http://pngimg.com/uploads/book/book_PNG51114.png"
          alt="book"
          className="banner__img"
        />
      </div>
      <div className="details">
        <div className="bookname">{name}</div>
        <div className="bookgenre">{genre}</div>
        <div className="bookauthor">
          ~ {author.name} <span className="age">( {author.age} )</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="book__details">
      <div className="banner">
        <img
          src="http://pngimg.com/uploads/book/book_PNG51114.png"
          alt="book"
          className="banner__img"
        />
      </div>
      <div className="details">
        <div className="bookname">Select a book </div>
        <div className="booksubname">from the list</div>
      </div>
    </div>
  );
}

export default BookDetails;
