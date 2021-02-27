import React from "react";
import "./Booklist.css";
import bookicon from "../../../src/assets/book.svg";
import { useMutation } from "@apollo/client";
import { QUERIES } from "./../../queries/queries";

const { deleteBookQuery, getBooksQuery } = QUERIES;
function BookItem({ name, genre, id, ...props }) {
  const [deleteBookHandler] = useMutation(deleteBookQuery);
  const deleteBook = (e, id) => {
    e.stopPropagation();
    deleteBookHandler({
      variables: { id: id },
      refetchQueries: [{ query: getBooksQuery }],
    });
    console.log("deleted");
  };
  return (
    <div className="book__item" {...props}>
      <div className="cross__btn" onClick={(e) => deleteBook(e, id)}>
        ❌
      </div>
      <div className="book__logo">
        <img src={bookicon} className="book__img" />
      </div>
      <div className="book__title">{name}</div>
      <div className="book__genre">{genre}</div>
    </div>
  );
}

export default BookItem;
