import BlackQuotes from "./BlackQuotes";
import Button from "./Button";
import Color from "./Color";
import Head from "./Head";
import Icons from "./Icons";
import List from "./List";
import Paragraph from "./Paragraph";
import Text from "./Text";

export default function Component() {
  return (
    <div className=" flex-col gap-[80px] lg:gap-[149px] flex items-center container mx-auto justify-center mb-[200px]">
      <Head />
      <Color />
      <Text />
      <Paragraph />
      <List />
      <BlackQuotes />
      <Button />
      <Icons />
    </div>
  );
}
