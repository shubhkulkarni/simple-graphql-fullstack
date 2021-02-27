import React, { useState } from "react";
import "./AddBooks.css";
import { useQuery, useMutation } from "@apollo/client";
import { QUERIES } from "./../../queries/queries";

const { getAuthorsQuery, addBookQuery } = QUERIES;

function AddBooks() {
  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    authorId: "",
  });
  const [addBookHandler] = useMutation(addBookQuery);

  const { loading, data, error } = useQuery(getAuthorsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(Boolean)) {
      const { name, genre, authorId } = formData;
      addBookHandler({ variables: { name, genre, authorId } });
      console.log(formData);
      setFormData({
        name: "",
        genre: "",
        authorId: "",
      });
    }
  };

  const onChange = (e, field) => {
    let obj = { ...formData, [field]: e.target.value };
    setFormData(obj);
  };
  return (
    <div className="addbooks">
      <form className="form">
        <div className="input__grp">
          <input
            type="text"
            className="text__input"
            placeholder="Write book name"
            value={formData.name}
            onChange={(e) => onChange(e, "name")}
            required
          />
        </div>
        <div className="input__grp">
          <input
            type="text"
            className="text__input"
            placeholder="Write book genre"
            value={formData.genre}
            onChange={(e) => onChange(e, "genre")}
            required
          />
        </div>
        <div className="input__grp">
          <select
            className="text__input"
            placeholder="Select author"
            value={formData.authorId}
            onChange={(e) => onChange(e, "authorId")}
            required
          >
            <option>Select author</option>
            {(data.authors || []).map((i) => {
              return (
                <option value={i.id} key={i.id}>
                  {i.name}
                </option>
              );
            })}
          </select>
        </div>
        <button className="btn-primary" type="submit" onClick={onSubmit}>
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBooks;
