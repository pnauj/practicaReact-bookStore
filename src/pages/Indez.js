import React from "react";
import { useAppContext } from "../store/Store";
import Layout from "../component/Layout";
import Book from "../component/Book";

const Indez = () => {
  const store = useAppContext();

  const booksContainers = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };
  return (
    <Layout>
      <div style={booksContainers}>
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Indez;
