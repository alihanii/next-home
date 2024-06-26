/* eslint-disable @next/next/no-img-element */
import {
  Book,
  Camion,
  Circule,
  Doc,
  Lamp,
  Like,
  Persent,
  Person,
  SettingLogo,
  SettingMini,
  Sounde,
  TikStar,
  HomeLogo,
  Speker,
  Shild,
} from "../Logo/Logos";

export default function Icons() {
  return (
    <div className="leading-[133.2%] sm:items-start items-center flex flex-wrap sm:w-[500px] md:w-[759px] w-[300px] lg:w-[1037px] 2xl:w-full xl:gap-[184px] gap-[80px]">
      <p className="text-[50px] font-semibold ">Icons</p>
      <div className="space-y-[30px] left-10">
        <div className="flex flex-wrap gap-[33px] pl-[28px]">
          <SettingLogo />
          <Person />
          <TikStar />
        </div>
        <div className="flex items-start flex-wrap">
          {/* <img src="Shild.png" alt="Icon" />
          <img src="/Speker.png" alt="Icon" /> */}

          <Shild />
          <Speker />
        </div>
        <div className="flex gap-[30px] pl-[28px] flex-wrap">
          <Persent />
          <Sounde />
          <SettingMini />
          <Lamp />
          <HomeLogo />
          <Book />
          <Doc />
          <Camion />
          <Like />
          <Circule />
        </div>
      </div>
    </div>
  );
}
