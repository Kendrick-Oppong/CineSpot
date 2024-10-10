"use client";

import { AlignJustify, Clapperboard } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileHeader = () => {
  const pathname = usePathname();

  return (
    <header className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="p-2">
            <AlignJustify className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="bg-muted">
          <div className="my-4">
            <Link
              href="/"
              className="font-bold text-2xl flex items-center gap-1"
            >
              <Clapperboard className="text-primary" />
              <h1>
                Cine<span className="text-primary">Spot</span>
              </h1>
            </Link>
          </div>

          <ul className="font-semibold space-y-2">
            {navLinks.map((link) => (
              <div key={link.title}>
              <SheetClose asChild>
                <Link href={link.href} >
                  <li
                    className={`hover:text-primary ${
                      pathname === link.href
                        ? "text-white hover:text-white bg-primary rounded-sm px-3 py-1"
                        : ""
                    }`}
                  >
                    {link.title}
                  </li>
                </Link>
              </SheetClose>
              </div>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileHeader;
