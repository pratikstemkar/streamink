import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "../ui/button";
import AuthDialog from "../auth/AuthDialog";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 border-b dark:bg-slate-950 bg-white">
      <nav className="py-2 px-12 flex justify-between items-center m-auto">
        <div className="flex space-x-1 items-center justify-center">
          <Image
            src="/live.png"
            height={30}
            width={30}
            alt="logo"
            className="dark:invert"
          />
          <h1 className="text-3xl font-extrabold leading-none tracking-tight hover:text-purple-600 flex items-center">
            <Link href="/">StreamInk</Link>
          </h1>
        </div>
        <div className="space-x-5 items-center flex">
          <Link href="/subscribe">
            <Button variant="outline" className="text-yellow-500 rounded-full">
              Subscribe
            </Button>
          </Link>
          <Button variant="default">Join Now</Button>
          <AuthDialog />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
