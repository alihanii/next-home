import LogoBlackQ from "../Logo/LogoBlackQ";
import "../ui/BlackQuotes.css";
export default function BlackQuotes() {
  return (
    <div
      className="sm:w-[500px] md:w-[759px] w-[300px] lg:w-[1037px] 2xl:w-full flex xl:flex-row xl:justify-start justify-center xl:items-start items-center flex-col
    2xl:gap-[94px] gap-[50px]"
    >
      <p className="font-bold text-[40px] ">BlackQuotes</p>
      <div className=" div  rounded-[30px] container flex items-center justify-center flex-col xl:w-[871.87px] xl:py-[70px] xl:px-[117px] md:py-[45px] md:px-[65px]  sm:py-[13px] sm:px-[40px]  py-[13px] px-[40px]">
        <LogoBlackQ />
        
        <p className="text-[20px] font-semibold italic text-center leading-[151.5%]">
          <span className="text-[41px]">W</span>hen an unknown printegalley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting.
        </p>
      </div>
    </div>
  );
}

