"use client";

import EditProfile from "@/components/profile/EditProfile";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Profile = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/user");
    },
  });

  return (
    <main className="flex flex-col items-center justify-center px-5 md:px-10 m-auto mt-5 lg:mt-5 space-y-5 w-full">
      <div className="flex lg:space-y-0 justify-between items-center w-full">
        <div className="flex items-center space-x-2 lg:space-x-5">
          <Avatar className="h-20 w-20 lg:h-40 lg:w-40">
            <AvatarImage
              src={session?.user?.image!}
              alt={session?.user?.name || "user"}
            />
            <AvatarFallback>{session?.user?.name}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">
              {session?.user?.name! ? session?.user?.name : null}
            </h2>
            <p className="text-sm">
              {session?.user?.email! ? session?.user?.email : null}
            </p>
          </div>
        </div>
        <div>
          <EditProfile />
        </div>
      </div>
    </main>
  );
};

export default Profile;
