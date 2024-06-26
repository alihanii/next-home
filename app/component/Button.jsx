export default function Button() {
  return (
    <div className="leading-[160%] items-center md:items-start sm:w-[500px] md:w-[759px] w-[300px] lg:w-[1037px] 2xl:w-full flex lg:flex-row flex-col 2xl:gap-[197px] lg:gap-[207px] gap-[50px]">
      <p className="text-[40px] font-bold">Button</p>
      <div className="font-semibold md:block flex items-center justify-center flex-col  text-[20px] md:space-y-[50px] space-y-[30px]">
        <div className="flex flex-wrap sm:justify-normal justify-center gap-[20px]">
          <button className="buttonBlackSM">Default</button>
          <button className="buttonBlueSM">Default</button>
        </div>
        <div className="flex flex-wrap justify-normal items-center md:items-start sm:justify-center gap-[20px]">
          <button className="buttonBlacklg">Default</button>
          <button className="buttonLightlg">Default</button>
        </div>
      </div>
    </div>
  );
}
