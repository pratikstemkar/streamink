"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustifyIcon, LogIn, LogOut, Sparkles, User } from "lucide-react";

import { signOut, useSession } from "next-auth/react";
import UserAvatar from "./UserAvatar";
import ThemeMenu from "./ThemeMenu";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const { data: session } = useSession({
    required: false,
  });

  return (
    <header className="sticky top-0 z-10 border-b dark:bg-slate-950 bg-white">
      <nav className="py-2 px-4 lg:px-12 flex justify-between items-center m-auto">
        <div className="flex space-x-1 items-center justify-center">
          <h1 className="text-2xl lg:text-3xl font-extrabold leading-none tracking-tight hover:text-purple-600 flex items-center">
            <Link href="/">{process.env.NEXT_PUBLIC_APP_NAME}</Link>
          </h1>
        </div>
        <div className="space-x-5 flex-row items-center justify-center">
          {session ? (
            <div className="flex justify-center items-center space-x-5">
              <Link href="/subscribe" className="hidden lg:block">
                <Button variant="outline" className="rounded-full">
                  <Sparkles className="mr-2 h-4 w-4 text-yellow-500" />
                  <span className="text-yellow-500">Subscribe</span>
                </Button>
              </Link>
              <UserAvatar params={{ image: session?.user?.image! }} />
            </div>
          ) : (
            <div className="flex">
              <Link href="/subscribe" className="hidden lg:block mr-5">
                <Button variant="outline" className="rounded-full">
                  <Sparkles className="mr-2 h-4 w-4 text-yellow-500" />
                  <span className="text-yellow-500">Subscribe</span>
                </Button>
              </Link>
              <Link href="/login" className="hidden lg:block">
                <Button variant="default" size="sm">
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>Sign In</span>
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" size="sm" className="lg:hidden">
                    <AlignJustifyIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href="/subscribe">
                    <DropdownMenuItem>
                      <Sparkles className="mr-2 h-4 w-4 text-yellow-500" />
                      <span className="text-yellow-500">Subscribe</span>
                    </DropdownMenuItem>
                  </Link>
                  <ThemeMenu />
                  <Link href="/login">
                    <DropdownMenuItem>
                      <LogIn className="mr-2 h-4 w-4" />
                      <span>Sign In</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
