"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
    }) {
    
  return (
    <html>
      <div className="text-center space-y-4 my-10 text-destructive font-semibold">
        <h2>Something went wrong!</h2>
        <h2>{error.message}</h2>
        <Button
          onClick={() => reset()}
        >
          Try again
        </Button>
      </div>
    </html>
  );
}
