import React from "react";
import { Mems } from "./data";
import Article from "../components/Mem";
import "../styles/Mem.css";

const RegularPage = () => {
  let mems = Mems.filter((mem) => mem.upvotes - mem.downvotes < 5);
  const regularList = mems.map((article) => (
    <Article key={article.title} {...article} />
  ));
  return <div className="regular">{regularList}</div>;
};
export default RegularPage;
