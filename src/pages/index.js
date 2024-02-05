import { Header, Footer } from "../components";
import { Highlight } from "./Highlight";
import { Trends } from "./Trends";
import { Blogs } from "./Blogs";
import { LoadMore } from "./LoadMore";
import React, { useState, useEffect } from "react";
// import { Footer } from "./Footer.js";

export const getStaticProps = async () => {
  // const His = await fetch("http://dev.to/api/articles?per_page=1&top=1");
  const His = await fetch("http://localhost:4000/api/highlight");
  const highlight = await His.json();
  const Trs = await fetch("http://localhost:4000/api/trend");
  const trends = await Trs.json();
  const Bls = await fetch("http://localhost:4000/api/blog");
  const blogs = await Bls.json();
  return { props: { highlight, trends, blogs } };
};

export default function Home({ highlight, trends, blogs }) {
  // const [highlight, setHighlight] = useState();
  // const [article, setArticle] = useState();
  // const [article, setArticle] = useState();

  // useEffect(() => {
  //   async function getArticle() {
  //     const res = await fetch("http://localhost:4000/api/main");
  //     const data = await data.json();
  //     setHighlight(article);
  //   }
  //   getArticle();
  // }, []);

  // console.log("article: ", article);

  return (
    <div className="flex flex-col gap-[100px]">
      <Highlight data={highlight} />
      <Trends data={trends} />
      <Blogs data={blogs} />
      {/* <LoadMore /> */}
      {/* <p>{article[0].title}</p> */}
    </div>
  );
}
