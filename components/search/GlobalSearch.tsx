"use client";

import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import toast from "react-hot-toast";

const GlobalSearch = ({
  setToggleSearch,
}: {
  setToggleSearch: (val: boolean) => void;
}) => {
  
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleMovieSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = inputRef.current?.value?.trim();
    if (!searchTerm) {
      toast.error("Please enter movie name🍿");
      return;
    }
    router.push(`/search?q=${searchTerm}`);
    setToggleSearch(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="w-full max-w-2xl px-2">
        <X
          onClick={() => setToggleSearch(false)}
          size={38}
          className="ml-auto my-3 rounded-sm border border-destructive text-destructive cursor-pointer"
        />
        <form onSubmit={(e) => handleMovieSearch(e)} className="">
          <Input
            className="w-full text-xl py-4 px-6 border rounded-lg border-primary text-center text-white"
            ref={inputRef}
            type="search"
            name="search"
            placeholder="Search for movie"
          />
          <Button type="submit" className="w-full mt-4">
            <Search size={23} className="mr-1" /> Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GlobalSearch;
