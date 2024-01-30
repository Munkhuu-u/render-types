import { Blog } from "@/components";

export function Blogs({ data }) {
  return (
    <div className="max-w-[1216px] flex flex-col gap-[32px] m-auto">
      <h2 className="text-gray-900 text-2xl font-bold">All Blog Post</h2>
      <div className="flex flex-row flex-wrap gap-[16px]">
        {data.map((aData) => {
          return <Blog aData={aData} />;
        })}
      </div>
    </div>
  );
}
