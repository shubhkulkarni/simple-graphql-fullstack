import React from "react";
import "./Booklist.css";
import BookItem from "./BookItem";

function Booklist() {
  return (
    <div className="booklist">
      <BookItem name={"Wings of fire"} genre={"inspirational"} />
      <BookItem name={"Wings of fire"} genre={"inspirational"} />
      <BookItem name={"Wings of fire"} genre={"inspirational"} />
      <BookItem name={"Wings of fire"} genre={"inspirational"} />
      <BookItem name={"Wings of fire"} genre={"inspirational"} />
      <BookItem name={"Wings of fire"} genre={"inspirational"} />{" "}
      <BookItem name={"Wings of fire"} genre={"inspirational"} />
      <BookItem name={"Wings of fire"} genre={"inspirational"} />
    </div>
  );
}

export default Booklist;
