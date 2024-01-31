import { Blog } from "@/components";
import { useRouter } from "next/router";

export function Blogs({ data }) {
  const router = useRouter();
  return (
    <div className="max-w-[1216px] flex flex-col gap-[32px] m-auto">
      <div className="flex flex-row justify-between">
        <h2 className="text-gray-900 text-2xl font-bold">All Blog Post</h2>
        <button
          className="text-gray-500 font-bold"
          onClick={() => router.push("/allblog")}
        >
          View all
        </button>
      </div>
      <div className="flex flex-row flex-wrap gap-[16px]">
        {data.map((aData) => {
          return <Blog aData={aData} />;
        })}
      </div>
    </div>
  );
}
