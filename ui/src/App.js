import AddBooks from "./views/AddBooks/AddBooks";
import BookDetails from "./views/BookDetails/BookDetails";
import Booklist from "./views/BookList/Booklist";
import "./App.css";
import React, { useState } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

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
    <ApolloProvider client={client}>
      <div className="App">
        <div className="left">
          <AddBooks />
          <Booklist sendBook={getBook} />
        </div>
        <div className="right">
          <BookDetails {...currentBook} />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
