import { Blog } from "@/components";
export const getServerSideProps = async () => {
  const res = await fetch(
    "https://dev.to/api/articles?per_page=15&top=15&tag=fashion"
  );
  const data = await res.json();
  return { props: { data } };
};

export default function page({ data }) {
  return (
    <div className="flex flex-wrap gap-5">
      {data.map((aData) => {
        return <Blog aData={aData} tag="Fashion" />;
      })}
    </div>
  );
}
