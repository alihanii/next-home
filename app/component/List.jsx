import Tiksvg from "../Logo/LgoList";

const arr = [
  "Efficiently myocardinate market-driven innovation.",
  "  Idea-sharing with back end products.",
  " Ballpark value added activity to beta test",
  "  Voluptate at dolores ut dolor ",
];

export default function List() {
  return (
    <div
      className="leading-[160%] sm:w-[500px] md:w-[759px] w-[300px] lg:w-[1037px] 2xl:w-full flex lg:flex-row flex-col
     2xl:gap-[263px] lg:gap-[237px] gap-[50px] items-start"
    >
      <p className="text-[40px] font-bold">List</p>
      <ul className="h-[208px] flex flex-col justify-between">
        {arr.map((item) => (
          <List2 key={"1"} item={item} />
        ))}
      </ul>
    </div>
  );
}

const List2 = ({ item }) => {
  return (
    <li className="flex items-center justify-start gap-[9px]">
      <Tiksvg />
      <p>{item}</p>
    </li>
  );
};
