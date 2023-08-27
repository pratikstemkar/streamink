"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="w-full flex flex-col justify-center items-center space-y-2">
      <h2 className="text-2xl lg:text-4xl text-red-500 font-extrabold">
        {error.name}
      </h2>
      <p>{error.message}</p>
      <Link href="/" className="text-indigo-500 underline">
        Return Home
      </Link>
    </main>
  );
}
