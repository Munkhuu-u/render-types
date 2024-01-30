export const Trend = ({ aData }) => {
  return (
    <div className="w-[298px] h-[320px] bg-gray-300 flex flex-col justify-end gap-[16px] pl-[28.5px] pb-[28px] rounded-lg">
      <p className="bg-indigo-500 w-fit px-[10px] py-[4px] rounded-md text-white">
        Technology
      </p>
      <p className="w-[230px] h-[76px] text-white text-lg font-semibold font-['Work Sans'] leading-7">
        {aData.title}
      </p>
    </div>
  );
};
export default Trend;
