import React, { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
    { title: "Harry Potter and the Goblet of Fire", author: "J.K. Rowling" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newBook.title.trim() && newBook.author.trim()) {
      setBooks((prevBooks) => [...prevBooks, newBook]);
      setNewBook({ title: "", author: "" });
    }
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title" 
              name="title" 
              value={newBook.title}
              onChange={handleInputChange} 
              placeholder="Enter book title"
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author" 
              name="author" 
              value={newBook.author}
              onChange={handleInputChange} 
              placeholder="Enter author name"
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;

// Check notes for verification 
