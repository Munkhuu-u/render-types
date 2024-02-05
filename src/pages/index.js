import { Header, Footer } from "../components";
import { Highlight } from "./Highlight";
import { Trends } from "./Trends";
import { Blogs } from "./Blogs";
import { LoadMore } from "./LoadMore";
import React, { useState, useEffect } from "react";
// import { Footer } from "./Footer.js";

// export const getStaticProps = async () => {
//   const His = await fetch("https://dev.to/api/articles?per_page=1&top=1");
//   const highlight = await His.json();
//   const Trs = await fetch("https://dev.to/api/articles?per_page=4&top=1");
//   const trends = await Trs.json();
//   const Bls = await fetch("https://dev.to/api/articles?per_page=15");
//   const blogs = await Bls.json();
//   return { props: { highlight, trends, blogs } };
// };

export default function Home({ highlight, trends, blogs }) {
  const [article, setArticle] = useState();

  useEffect(() => {
    async function getArticle() {
      const res = await fetch("http://localhost:4000/api/blog");
      const article = await res.json();
      console.log("article: ", article);
      // console.log("article.title", article.title);
      setArticle(article);
    }
    getArticle();
  }, []);

  console.log("article", article);
  // getArticle();

  return (
    <div className="flex flex-col gap-[100px]">
      {/* <Highlight data={highlight} />
      <Trends data={trends} />
      <Blogs data={blogs} />
    <LoadMore /> */}
      <p>FRONT END</p>
      <p>{article.title}</p>
    </div>
  );
}
