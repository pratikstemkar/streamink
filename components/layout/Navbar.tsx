import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "../ui/button";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustifyIcon, SnowflakeIcon } from "lucide-react";
import LoginDialog from "../auth/LoginDialog";
import RegisterDialog from "../auth/RegisterDialog";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 border-b dark:bg-slate-950 bg-white">
      <nav className="py-2 px-5 md:px-12 flex justify-between items-center m-auto">
        <div className="flex space-x-1 items-center justify-center">
          <Image
            src="/live.png"
            height={30}
            width={30}
            alt="logo"
            className="dark:invert"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold leading-none tracking-tight hover:text-purple-600 flex items-center">
            <Link href="/">StreamInk</Link>
          </h1>
        </div>
        <div className="space-x-5 items-center justify-center hidden md:block">
          <Link href="/subscribe">
            <Button variant="outline" className="text-yellow-500 rounded-full">
              Subscribe
            </Button>
          </Link>
          <RegisterDialog />
          <LoginDialog />
          {/* <ModeToggle /> */}
        </div>
        <div className="flex items-center space-x-2 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" size="icon">
                <AlignJustifyIcon className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator /> */}
              <Link href="/subscribe">
                <DropdownMenuItem>
                  <span className="text-yellow-500">Subscribe</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>Join Now</DropdownMenuItem>
              <DropdownMenuItem>Sign In</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
