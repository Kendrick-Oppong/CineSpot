import { navLinks } from "@/constants";
import Link from "next/link";
import { Clapperboard, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between px-5 py-2 bg-secondary">
      <div className="font-bold text-2xl flex items-center gap-1">
        <Clapperboard className="text-primary" />
        <h1>
          Cine<span className="text-primary">Spot</span>
        </h1>
      </div>

      <ul className="flex justify-between gap-4 font-semibold">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.title}>
            <li className="hover:text-primary">{link.title}</li>
          </Link>
        ))}
      </ul>

      <div className="flex justify-between items-center">
        <Search />
        <p>Theme</p>
      </div>
    </header>
  );
};

export default Header;
