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
      next: { revalidate: 60 },
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
  const userId = session?.user.id;
  const watchlistData = await getWatchlist(userId);
  return (
    <main className="flex flex-col items-center justify-center px-2 md:px-10 m-auto mt-5 space-y-5">
      <div className="flex w-full">
        <h2 className="text-xl font-bold">Watchlist</h2>
      </div>
      <div className="columns-6 ">
        {/* {JSON.stringify(watchlistData)} */}
        {watchlistData?.watchlist.shows.map((show: string) => (
          <WatchlistShow params={{ showId: show }} key={show} />
        ))}
      </div>
    </main>
  );
};

export default Watchlist;
