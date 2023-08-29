import ShowList from "@/components/home/ShowList";
import { IShow, showListParams } from "@/lib/types";
import { getRandomShows } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trending Now",
};

const getShows = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/shows`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch shows!");
  }

  return res.json();
};

const Trending = async () => {
  const showsData = await getShows();

  const trendingShows = getRandomShows(showsData.shows, 12);
  const trendingParams: showListParams = {
    title: "Trending Now",
    link: "trending",
    list: trendingShows as Array<IShow>,
  };

  return (
    <main className="flex flex-col items-center justify-center px-2 md:px-10 m-auto mt-5 space-y-5">
      <div className="w-full space-y-2">
        <ShowList params={trendingParams} />
      </div>
    </main>
  );
};

export default Trending;
