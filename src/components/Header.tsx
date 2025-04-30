import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full  text-white flex justify-center items-center -mt-5 ps-96">
      <nav className="flex space-x-4 text-sm">
        <Link href="/">Projects</Link>
        <Link href="/certificates">Certificates</Link>
        <Link href="/contact-me">ContactMe</Link>
      </nav>
    </div>
  );
};

export default Header;
