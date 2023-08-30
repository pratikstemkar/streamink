import { options } from "@/app/api/auth/[...nextauth]/options";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Watchlist",
  description: "List of shows added to Watchlist",
};

const Watchlist = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/browse/watchlist");
  }
  return <div>Watchlist</div>;
};

export default Watchlist;
