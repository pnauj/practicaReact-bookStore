import React from "react";
import { Link } from "react-router-dom";

const Book = ({ item }) => {
  const bookContainer = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  };

  const bookInfo = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    textDecoration: "none",
  };
  return (
    <div style={bookContainer}>
      <Link to={`/view/${item.id}`} style={bookInfo}>
        <img src={item.cover} width="200" alt={item.title} />
        <div>{item.title}</div>
      </Link>
    </div>
  );
};

export default Book;
