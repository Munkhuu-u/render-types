import { Header } from "./Header";
import { Highlight } from "./Highlight";
import { Trends } from "./Trends";
import { Blogs } from "./Blogs";
import { LoadMore } from "./LoadMore";
import { Footer } from "./Footer.js";

export const getStaticProps = async () => {
  const His = await fetch("https://dev.to/api/articles?per_page=1&top=1");
  const highlight = await His.json();

  const Trs = await fetch("https://dev.to/api/articles?per_page=4&top=1");
  const trends = await Trs.json();

  const Bls = await fetch("https://dev.to/api/articles?per_page=15");
  const blogs = await Bls.json();

  return { props: { highlight, trends, blogs } };
};

export default function Home({ highlight, trends, blogs }) {
  console.log(trends);
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      <Highlight data={highlight} />
      <Trends data={trends} />
      <Blogs data={blogs} />
      <LoadMore />
      <Footer />
    </div>
  );
}
