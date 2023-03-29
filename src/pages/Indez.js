import React from "react";
import { useAppContext } from "../store/Store";
import { Link } from "react-router-dom";

const Indez = () => {
  const store = useAppContext();
  return (
    <div>
      <Link to="/create">Create</Link>
      {store.items.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};

export default Indez;
