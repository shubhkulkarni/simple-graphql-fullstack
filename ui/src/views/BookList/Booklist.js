import React from "react";
import "./Booklist.css";
import BookItem from "./BookItem";
import { useQuery } from "@apollo/client";
import { QUERIES } from "./../../queries/queries";

const { getBooksQuery } = QUERIES;

function Booklist({ sendBook }) {
  const onBookClick = (book) => {
    sendBook(book);
  };

  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const booklist = data.books;
  return (
    <div className="booklist">
      {booklist.map((book) => {
        return (
          <BookItem
            key={book.id}
            name={book.name}
            genre={book.genre}
            id={book.id}
            onClick={() => onBookClick(book)}
          />
        );
      })}
    </div>
  );
}

export default Booklist;
