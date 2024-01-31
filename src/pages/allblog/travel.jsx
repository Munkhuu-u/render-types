import { Blog } from "@/components";

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://dev.to/api/articles?per_page=15&top=&tag=travel"
  );
  const data = await res.json();
  return { props: { data } };
};

export default function page({ data }) {
  return (
    <div>
      <p>asdfas</p>
      {data.map((aData) => {
        <Blog aData={aData} tag="Travel" />;
      })}
    </div>
  );
}
