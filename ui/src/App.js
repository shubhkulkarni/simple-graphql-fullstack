import AddBooks from "./views/AddBooks/AddBooks";
import BookDetails from "./views/BookDetails/BookDetails";
import Booklist from "./views/BookList/Booklist";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="left">
        <AddBooks />
        <Booklist />
      </div>
      <div className="right">
        {" "}
        <BookDetails />
      </div>
    </div>
  );
}

export default App;
