import "./changelog.css";
function page() {
  return (
    <div className="flex md:pb-[150px] pb-[90px] md:pt-[107px] pt-[67px] gap-[94px] flex-col container justify-center items-center">
      <div className="text-center">
        <p className="text-[40px] font-semibold text-black1 leading-[133.2%]">
          Changelog
        </p>
        <p className="text-[20px] leading-[160%] text[#4E4E4E]">
          All changes and updates made to this template will be logged below.
        </p>
      </div>
      <div className="div rounded-[30px]  flex justify-center items-center container sm:px-0 px-[8px] xl:py-[75px] md:py-[55px] py-[20px] ">
        <div className="bg-white rounded-[30px] 2xl:w-1/2  flex items-center justify-center sm:py-[62px] py-[40px] lg:px-[119px] sm:px-[50px] px-[5px] sm:flex-row flex-col">
          <span className="text-[60px] text-[#2F2F2F] leading-[110%] font-extrabold">
            V.1
          </span>
          <p className="text-[#808080] text-[20px] text-center leading-[150.2%]">
            Initial Saasup Webflow Template Release
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
