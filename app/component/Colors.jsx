import React from "react";

function Colors({ item }) {
  return (
    <div className="space-y-[22px]">
      <div className={`${item?.cls} rounded-[30px] h-[203px] w-[203px] `}></div>
      <div className="space-y-[4px]">
        <p>{item.name}</p>
        <p>{item.color}</p>
      </div>
    </div>
  );
}

export default Colors;
