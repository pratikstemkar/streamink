import ShowList from "@/components/home/ShowList";
import BannerCard from "@/components/layout/BannerCard";
import { IShow, showListParams } from "@/lib/types";
import { getFeaturedShow, getRandomShows } from "@/lib/utils";

const getShows = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/shows`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch shows!");
  }

  return res.json();
};

export default async function Home() {
  const showsData = await getShows();
  const featuredShow = getFeaturedShow(showsData);
  const trendingShows = getRandomShows(showsData.shows, 6);
  const trendingParams: showListParams = {
    title: "Trending Now",
    link: "trending",
    list: trendingShows as Array<IShow>,
  };
  const recommendedShows = getRandomShows(showsData.shows, 6);
  const recommendedParams: showListParams = {
    title: "Recommended for You",
    link: "recommended",
    list: recommendedShows as Array<IShow>,
  };
  return (
    <main className="flex flex-col items-center justify-center px-5 md:px-10 m-auto mt-5 ">
      {/* {JSON.stringify(showsData)} */}
      <BannerCard params={featuredShow!} />
      <ShowList params={trendingParams} />
      <ShowList params={recommendedParams} />
    </main>
  );
}
