import React, { useState } from "react";
import "./AddBooks.css";

function AddBooks() {
  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const onSubmit = () => {
    if (Object.values(formData).every(Boolean)) {
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
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
            <option value={3}>Option 3</option>
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
