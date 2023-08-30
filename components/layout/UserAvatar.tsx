"use client";

import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

import { ListPlus, LogOut, Sparkles, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import ThemeMenu from "./ThemeMenu";

const UserAvatar = ({ params }: { params: { image: string } }) => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 rounded-full shadow"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={params.image} alt="profile image" />
            <AvatarFallback>SI</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator /> */}
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => router.push("/subscribe")}
            className="cursor-pointer text-yellow-500 lg:hidden"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            <span>Subscribe</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push("/profile")}
            className="cursor-pointer"
          >
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push("/browse/watchlist")}
            className="cursor-pointer"
          >
            <ListPlus className="mr-2 h-4 w-4" />
            <span>Watchlist</span>
          </DropdownMenuItem>
          <ThemeMenu />
          {/* <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem> */}
          <DropdownMenuItem
            onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
            className="text-red-500 cursor-pointer"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
