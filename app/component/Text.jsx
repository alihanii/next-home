import React from "react";
const arr = [
  { tex: "", size: "70px" },
  { tex: "", size: "60px" },
  { tex: "", size: "40px" },
  { tex: "", size: "35px" },
  { tex: "", size: "30px" },
  { tex: "", size: "25px" },
  { tex: "", size: "20px" },
];
function Text() {
  return (
    <div
      className=" sm:w-[500px] md:w-[759px] w-[300px] lg:w-[1037px] 2xl:w-full flex lg:flex-row flex-col
     2xl:gap-[236px] lg:gap-[207px] gap-[50px]"
    >
      <p className="text-[50px] font-semibold leading-[160%]">Text</p>
      <div className="text-left space-y-[32px] md:space-y-[48px]">
        <p className="text-[70px]">Display Text</p>
        <p className="text-[60px]">Heading 01 Text</p>
        <p className="text-[40px]">Heading 02 Text</p>
        <p className="text-[35px]">Heading 03 Text</p>
        <p className="text-[30px]">Heading 04 Text</p>
        <p className="text-[25px]">Heading 05 Text</p>
        <p className="text-[20px]">Heading 06 Text</p>
      </div>
    </div>
  );
}

export default Text;
