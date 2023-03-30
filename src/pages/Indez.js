import React from "react";
import { useAppContext } from "../store/Store";
import Layout from "../component/Layout";
import Book from "../component/Book";

const Indez = () => {
  const store = useAppContext();
  return (
    <Layout>
      {store.items.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </Layout>
  );
};

export default Indez;
