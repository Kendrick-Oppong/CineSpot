"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { Clapperboard, Search } from "lucide-react";
import { ModeToggle } from "../theme";
import { usePathname } from "next/navigation";
import { GlobalSearch } from "../search";
import { useState } from "react";
import { MobileHeader } from ".";

const Header = () => {
  const pathname = usePathname();
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <header className="flex justify-between px-3 py-2">
      <Link href="/">
        <div className="font-bold text-2xl flex items-center gap-1">
          <Clapperboard className="text-primary" />
          <h1>
            Cine<span className="text-primary">Spot</span>
          </h1>
        </div>
      </Link>

      <ul className="hidden lg:flex items-center justify-between gap-4 font-semibold">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.title}>
            <li
              className={`hover:text-primary ${
                pathname === link.href ? "text-white hover:text-white bg-primary rounded-sm px-3 py-1" : ""
              }`}
            >
              {link.title}
            </li>
          </Link>
        ))}
      </ul>

      {toggleSearch && <GlobalSearch setToggleSearch={setToggleSearch} />}

      <div className="flex gap-3 md:gap-6 justify-between items-center">
        <Search
          className="cursor-pointer"
          onClick={() => setToggleSearch(true)}
        />
        <ModeToggle />
        <MobileHeader />
      </div>
    </header>
  );
};

export default Header;
