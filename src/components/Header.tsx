import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full text-black flex justify-center items-center bg-yellow-400 py-4 rounded-s-lg">
      <nav className="flex space-x-4 ">
        <Link href="/">Projects</Link>
        <Link href="/certificates">Certificates</Link>
        <Link href="/contact-me">ContactMe</Link>
      </nav>
    </div>
  );
};

export default Header;
