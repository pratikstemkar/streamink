"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const UserPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/user");
    },
  });

  return (
    <>
      User Page<div>{JSON.stringify(session?.user)}</div>
    </>
  );
};

export default UserPage;
