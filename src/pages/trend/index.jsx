import { Trend } from "@/components";

export default function Index(props) {
  console.log(props.data[0].title);
  return (
    <div className="flex flex-row gap-1 overflow-scroll">
      {props.data.map((aData) => {
        return <Trend aData={aData} />;
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?username=ben");
  const data = await res.json();
  return { props: { data } };
};
