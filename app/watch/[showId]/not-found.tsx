import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full flex flex-col justify-center items-center space-y-2">
      <h2 className="text-2xl lg:text-4xl text-red-500 font-extrabold">
        Not Found
      </h2>
      <p>Could not find requested show</p>
      <Link href="/" className="text-indigo-500 underline">
        Return Home
      </Link>
    </main>
  );
}
