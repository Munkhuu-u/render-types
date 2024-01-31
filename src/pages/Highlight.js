export const Highlight = ({ data }) => {
  const highlight = data[0];
  // const newD = new Date(highlight.created_at);
  // const cF = new Intl.DateTimeFormat("en-us", {
  //   dateStyle: "MMM DD, YYYY",
  // });
  // console.log(cF.format(newD));
  // console.log(newD);
  return (
    <div className="max-w-[1216px] w-full h-[600px] relative bg-gray-300 rounded-xl m-auto">
      <div
        className="w-full h-full border-gray-600 rounded-xl"
        style={{
          backgroundImage: `url(${highlight.cover_image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          bachgroundPosition: "center",
        }}
      />
      <div className="max-w-[598px] bg-white absolute border border-gray-200 rounded-xl left-[11px] bottom-[13px] flex flex-col gap-6 p-[40px] justify-start">
        <div className="flex flex-col gap-4">
          <p className="bg-indigo-500 w-fit px-[10px] py-[4px] rounded-md text-white">
            {highlight.tag_list[0]}
          </p>
          <p className="font-semibold text-4xl font-['Work Sans']">
            {highlight.title}
          </p>
        </div>
        <h2 className="text-neutral-400">{highlight.created_at}</h2>
      </div>
    </div>
  );
};

export default Highlight;
