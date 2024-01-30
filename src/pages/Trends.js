import { Trend } from "@/components";

export function Trends({ data }) {
  console.log(data);
  return (
    <div className="flex flex-col max-w-[1216px] m-auto">
      <h2 className="text-gray-900 text-2xl font-bold">Trending</h2>
      <div className="flex flex-row overflow-scroll justify-center pb-[12px] gap-[20px]">
        {data.map((aData) => {
          return <Trend aData={aData} />;
        })}
      </div>
    </div>
  );
}
