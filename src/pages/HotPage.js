import React from "react";
import { Mems } from "./data";
import Article from "../components/Mem";
import "../styles/Mem.css";

const HotPage = () => {
  let mems = Mems.filter((mem) => mem.upvotes - mem.downvotes > 5);
  const hotList = mems.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="hot">{hotList}</div>;
};
export default HotPage;
