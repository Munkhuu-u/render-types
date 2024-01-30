export const Trend = ({ aData }) => {
  return (
    <div
      className="w-[298px] h-[320px] bg-gray-300 flex flex-col justify-end gap-[16px] pl-[28.5px] pb-[28px] rounded-lg"
      style={{
        backgroundImage: `url(${aData.cover_image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="bg-indigo-500 w-fit px-[10px] py-[4px] rounded-md text-white">
        {aData.tag_list[0]}
      </p>
      <p className="w-[230px] h-[76px] text-white text-lg font-semibold font-['Work Sans'] leading-7">
        {aData.title}
      </p>
    </div>
  );
};
export default Trend;
