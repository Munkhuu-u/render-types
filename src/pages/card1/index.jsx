import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?username=ben");
  const data = await res.json();
  return { props: { data } };
};

export default function Todo(props) {
  const router = useRouter();
  return (
    <div>
      <h1>card 1</h1>
      <p>{`Title: ${props.data[0].title}`}</p>
      <p>Title: {props.data[0].title}</p>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        goto HOME
      </button>
    </div>
  );
}
