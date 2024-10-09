import { Button } from "@/components/ui/button";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="py-10 grid place-content-center px-4 bg-muted">
      <div className="text-center">
        <h1 className="text-8xl font-black text-gray-400">404</h1>

        <p className="my-4 text-2xl font-bold tracking-tight sm:text-4xl">
          Uh-oh!
        </p>

        <p className="my-4 text-gray-500">We couldn&apos;t find that page</p>

        <Button>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
