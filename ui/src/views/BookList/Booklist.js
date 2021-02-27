import React from "react";
import "./Booklist.css";
import BookItem from "./BookItem";

const samplebooks = [
  {
    name: "Wings of fire",
    genre: "inspiration",
    author: { name: "Dr. APJ Abdul Kalam", age: 65 },
  },
  {
    name: "Yayati",
    genre: "novel",
    author: { name: "V.S Khandekar", age: 95 },
  },
  {
    name: "Mrutyunjay",
    genre: "history",
    author: { name: "Shivaji Sawant", age: 52 },
  },
  {
    name: "Vision 2020dhgdfghdfggdfgdgdgdgd",
    genre: "general",
    author: { name: "Chetan Bhagat", age: 37 },
  },
];

function Booklist({ sendBook, booklist = samplebooks }) {
  const onBookClick = (book) => {
    sendBook(book);
  };
  return (
    <div className="booklist">
      {booklist.map((book) => {
        return (
          <BookItem
            name={book.name}
            genre={book.genre}
            onClick={() => onBookClick(book)}
          />
        );
      })}
    </div>
  );
}

export default Booklist;
