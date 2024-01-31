export const Blog = ({ aData , tag }) => {
  return (
    <div className="w-[392px] h-[476px] bg-white flex flex-col p-[16px] border rounded-lg gap-[16px]">
      <div
        className="w-[360px] h-[240px] rounded-md"
        style={{
          backgroundImage: `url(${aData.cover_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="flex flex-col justify-end gap-5">
        <div className="flex flex-col gap-5">
          <p className="bg-indigo-500/5 text-indigo-500 w-fit px-[10px] py-[4px] rounded-md">
            {tag}
          </p>
          <p className=" h-[76px] text-black text-lg font-semibold font-['Work Sans'] leading-7">
            {aData.title}
          </p>
        </div>
        <p className="text-neutral-400  datepicker-format='mm/dd/yyyy'">
          {aData.published_at}
        </p>
      </div>
    </div>
  );
};
export default Blog;
