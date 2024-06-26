import "./Color.css";
import Colors from "./Colors";
const arr = [
  { color: "49DEFF", name: "Primary - 01", cls: "bg-blue1" },
  { color: "4FFFDF", name: "Primary - 02", cls: "bg-blue2" },
  { color: "303030", name: "Primary - 03", cls: "bg-black1" },
];
const arr2 = [
  { color: "4E4E4E", name: "Primary - 01", cls: "bg-black2" },
  { color: "DEDEDE", name: "Primary - 02", cls: "bg-white1" },
  { color: "F4F4F4", name: "Primary - 03", cls: "bg-white2" },
  { color: "F9F9F9", name: "Primary - 04", cls: "bg-white3" },
];
export default function Color() {
  return (
    <div className="font-semibold flex-col 2xl:flex-row flex w-full  items-center 2xl:items-start gap-[100px] 2xl:gap-[205px]">
      <div className=" text-[50px] block">Color</div>
      <div className="flex flex-col">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-y-[56px] mb-[56px] gap-x-[75px]">
          {arr.map((item) => (
            <Colors key={item.name} item={item} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-y-[56px] gap-x-[75px]">
          {arr2.map((item) => (
            <Colors key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
