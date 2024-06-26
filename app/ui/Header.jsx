import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <div className="pt-4 flex items-center justify-between text-xl container mx-auto">
      <a className="flex items-center justify-center gap-2" href="/">
        <Logo />
        <p className={`text-4xl font-bold	text-black`}>PrimeCRM</p>
      </a>
      <div className="flex items-center justify-center gap-11	">
        <span>Solution</span>
        <span>Industries</span>
        <span>Products</span>
        <span>Resources</span>
        <span>Pricing</span>
        <button className="buttonBlackSM w-32	h-14">Login</button>
      </div>
    </div>
  );
}
