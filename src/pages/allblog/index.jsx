import { Blog } from "../../components/Blog";

// export const getServerSideProps = async (context) => {
//   const { query } = context;
//   // console.log("context: ", context);
//   // console.log("query: ", query);
//   console.log("context.query: ", context.query);
//   console.log("query.id: ", query.id);
//   const res = await fetch(`https://dev.to/api/articles?per_page=15&top=1`);
//   const data = await res.json();
//   const someArr = [
//     { name: "Munkhuu0" },
//     { name: "Munkhuu1" },
//     { name: "Munkhuu2" },
//     { name: "Munkhuu3" },
//   ];
//   return { props: { data, someArr } };
// };

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?per_page=15&top=1");
  const data = await res.json();
  const someArr = [
    { name: "All" },
    { name: "Design" },
    { name: "Travel" },
    { name: "Fashion" },
    { name: "Technology" },
    { name: "Branding" },
  ];
  // console.log("log fromr sta", data);
  return { props: { data, someArr } };
};

export default function page({ data, someArr }) {
  // const { data, someArr } = props;
  // console.log("from AllBlog props: ", props);
  console.log("logging from allblog page data:", data);
  console.log("logging from allblog page someArr: ", someArr);
  return (
    <div className="max-w-[1216px] flex flex-col gap-[32px] m-auto justify-">
      <h2 className="text-gray-900 text-2xl font-bold">All Blog Post</h2>
      {/* Buttons */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-between gap-4">
          {someArr.map((e) => {
            return (
              <button
                className="text-gray-500 font-bold"
                onClick={() => router.push("/allBlog")}
              >
                {e.name}
              </button>
            );
          })}
        </div>
        <h2 className="text-gray-500 font-bold">HOME</h2>
      </div>
      {/* Cards */}
      <div className="flex flex-row flex-wrap gap-[16px]">
        {data.map((aData) => {
          return <Blog aData={aData} />;
        })}
      </div>
    </div>
  );
}
