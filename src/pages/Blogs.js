import { Blog } from "@/components";

export function Blogs({ data }) {
  return (
    <div>
      {data.map((aData) => {
        return <Blog aData={aData} />;
      })}
    </div>
  );
}
