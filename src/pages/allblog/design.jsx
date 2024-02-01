import { Blog } from "../../components";
import { useState } from "react";

export const getServerSideProps = async () => {
  const res = await fetch(`https://dev.to/api/articles?tag=design&per_page=3`);
  const initialData = await res.json();
  return { props: { initialData } };
};

export default function Page({ initialData }) {
  const [pageCount, setPageCount] = useState(2);
  const [articles, setArticles] = useState(initialData);
  // console.log("logging grom page fn data: ", data);

  const loadMoreHandler = async () => {
    console.log("load more fn ajillaj baina");
    const res = await fetch(
      `https://dev.to/api/articles?tag=design&per_page=3&page=${pageCount}`
    );
    const data = await res.json();
    console.log(pageCount);
    console.log(initialData);
    setPageCount(pageCount + 1);
    setArticles([...articles, ...data]);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-5">
        {articles.map((aData) => {
          return <Blog aData={aData} tag="Design" />;
        })}
      </div>
      <div className="w-full py-5 m-auto flex justify-center bg-green-400">
        <button
          className="border rounded-xl px-5 py-1 bg-white"
          onClick={() => {
            // console.log("button ajillaj baina");
            loadMoreHandler();
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
