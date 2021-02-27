import AddBooks from "./views/AddBooks/AddBooks";
import BookDetails from "./views/BookDetails/BookDetails";
import Booklist from "./views/BookList/Booklist";
import "./App.css";
import { useState } from "react";
function App() {
  const [currentBook, setCurrentBook] = useState({
    name: "",
    genre: "",
    author: { name: "", age: null },
  });
  const getBook = (book) => {
    setCurrentBook(book);
  };
  return (
    <div className="App">
      <div className="left">
        <AddBooks />
        <Booklist sendBook={getBook} />
      </div>
      <div className="right">
        <BookDetails {...currentBook} />
      </div>
    </div>
  );
}

export default App;
