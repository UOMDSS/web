import NavLogo from "@/public/muds.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="container flex items-center  justify-between min-w-[64px] py-3 px-[1rem] w-full bg-white border-b border-neutral-900 border-opacity-10">
      <Link className="inline-flex h-full items-center" href={"/"}>
        <Image priority src={NavLogo} alt="MUDS Logo" height={12} width={12} />
      </Link>
    </header>
  );
};

export default Navbar;
