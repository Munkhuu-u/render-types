import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?username=ben");
  const data = await res.json();
  return { props: { data } };
};

export default function Highlight(props) {
  const router = useRouter();
  return (
    <div>
      <h1>HIGHLIGHT</h1>
      <p>{`Title: ${props.data[0].title}`}</p>
      <p>Title: {props.data[0].title}</p>

      <div className="max-w-[1216px] w-full h-[600px] relative bg-gray-300 rounded-xl m-auto">
        <div className="w-full h-full">
          <img src="./hl.png" className="" alt="" />
        </div>
        <div className="max-w-[598px] bg-white absolute border border-gray-200 rounded-xl left-[11px] bottom-[13px] flex flex-col gap-6 p-[40px] justify-start">
          <div className="flex flex-col gap-4">
            <p className="bg-indigo-500 w-fit px-[10px] py-[4px] rounded-md text-white">
              Technology
            </p>
            <p className="font-semibold text-4xl font-['Work Sans']">
              Grid system for better Design User Interface
            </p>
          </div>
          <h2 className="text-neutral-400">August 20, 2022</h2>
        </div>
      </div>
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
