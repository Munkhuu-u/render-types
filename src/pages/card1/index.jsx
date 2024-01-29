export default function Todo(props) {
  console.log(props);
  return (
    <div>
      <h1>card 1</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?username=ben");
  const data = await res.json();
  console.log("response", res);
  console.log(data);
  return { props: { data } };
};
