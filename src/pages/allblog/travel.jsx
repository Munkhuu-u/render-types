import { Blog } from "@/components";

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://dev.to/api/articles?per_page=15&top=&tag=travel"
  );
  const data = await res.json();
  console.log("logging from travel getserversideprops: ", data);
  return { props: { data } };
};

export default function page({ data }) {
  console.log("log from travel fn", data);
  return (
    <div className="flex flex-wrap gap-5">
      {data.map((aData) => {
        return <Blog aData={aData} tag="Travel" />;
      })}
    </div>
  );
}
