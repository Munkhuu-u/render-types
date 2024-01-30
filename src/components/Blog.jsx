export const Blog = ({ aData }) => {
  console.log(aData);
  return (
    <div className="w-[298px] h-[320px] bg-white flex flex-col justify-end gap-[16px] pl-[28.5px] pb-[28px] border rounded-lg">
      <div className="w-full h-full">
        <img src="./hl.png" className="" alt="" />
      </div>
      <p className="bg-indigo-500/5 text-indigo-500 w-fit px-[10px] py-[4px] rounded-md">
        {"Munkhuu"}
      </p>
      <p className="w-[230px] h-[76px] text-black text-lg font-semibold font-['Work Sans'] leading-7">
        {aData.title}
      </p>
      <p className="text-neutral-400  datepicker-format='mm/dd/yyyy'">
        {aData.published_at}
      </p>
    </div>
  );
};
export default Blog;
