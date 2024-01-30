import { Post } from "../../components/index";
export default function Index(props) {
  console.log({ props });
  return (
    <div className="flex gap-1">
      {props.data.map((aData) => {
        return <Post aData={aData} />;
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?username=ben");
  const data = await res.json();
  console.log({ data });
  return { props: { data } };
};
