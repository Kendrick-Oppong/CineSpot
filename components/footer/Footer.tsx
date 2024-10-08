import { navLinks } from "@/constants";
import {ScrollToTop} from "."
import { Clapperboard } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto grid grid-cols-2 px-5 py-8 bg-secondary">
        <ScrollToTop/>
      <div>
          <Link href="/">
        <div className="flex items-center gap-1">
          
          <Clapperboard className="text-primary" />
          <h1 className="text-2xl font-bold">
            Cine<span className="text-primary">Spot</span>
          </h1>
        </div>
          </Link>
        <p className="mt-2 ">
          Discover the world of cinema with <span>CineSpot</span>
          <br />
          Your go-to destination for the latest in movies, reviews, and
          entertainment <br />
          Stay updated, stay entertained.
        </p>
      </div>

          <ul className="font-medium self-center justify-self-center">
              <h1 className="text-primary font-semibold">Quick Links</h1>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.title}>
            <li className="hover:text-primary">{link.title}</li>
          </Link>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
