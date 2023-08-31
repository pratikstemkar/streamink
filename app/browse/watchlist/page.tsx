import { options } from "@/app/api/auth/[...nextauth]/options";
import WatchlistShow from "@/components/home/WatchlistShow";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Watchlist",
  description: "List of shows added to Watchlist",
};

async function getWatchlist(userId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/shows/watchlist/${userId}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Watchlist not Found!");
  }

  return res.json();
}

const Watchlist = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/browse/watchlist");
  }
  // @ts-ignore
  const userId = session?.user?.id;
  const watchlistData = await getWatchlist(userId);
  return (
    <main className="flex flex-col items-center justify-center px-2 md:px-10 m-auto mt-2 lg:mt-5 space-y-2 w-full">
      <div className="flex w-full">
        <h2 className="text-xl font-bold">Watchlist</h2>
      </div>
      <div className="columns-2 lg:columns-6 gap-1 lg:gap-4">
        {watchlistData?.watchlist.shows.map((show: string) => (
          <WatchlistShow params={{ showId: show }} key={show} />
        ))}
      </div>
    </main>
  );
};

export default Watchlist;
