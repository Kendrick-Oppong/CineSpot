import { navLinks } from "@/constants";
import { ScrollToTop } from ".";
import { Clapperboard } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <footer className="mt-auto sm:grid grid-cols-2 px-5 py-8 ">
        <ScrollToTop />
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
        <ul className="mt-8 sm:mt-0 font-medium self-center justify-self-center">
          <h1 className="text-primary font-semibold">Quick Links</h1>
          {navLinks.map((link) => (
            <Link href={link.href} key={link.title}>
              <li className="hover:text-primary">{link.title}</li>
            </Link>
          ))}
        </ul>
      </footer>
      <p className="text-center py-6">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
