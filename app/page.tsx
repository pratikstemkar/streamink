import ShowList from "@/components/home/ShowList";
import BannerCard from "@/components/layout/BannerCard";
import { IShow, showListParams } from "@/lib/types";
import {
  getFeaturedShow,
  getRandomObjectsExcluding,
  getRandomShows,
  getShows,
} from "@/lib/utils";

export default async function Home() {
  const showsData = await getShows();
  const featuredShow = getFeaturedShow(showsData);
  const trendingShows = getRandomShows(showsData.shows, 6);
  const trendingParams: showListParams = {
    title: "Trending Now",
    link: "trending",
    list: trendingShows as Array<IShow>,
  };
  const recommendedShows = getRandomObjectsExcluding(
    showsData.shows,
    6,
    trendingShows as Array<IShow>
  );
  const recommendedParams: showListParams = {
    title: "Recommended for You",
    link: "recommended",
    list: recommendedShows as Array<IShow>,
  };
  return (
    <main className="flex flex-col items-center justify-center px-2 md:px-10 m-auto mt-2 lg:mt-5 ">
      {/* {JSON.stringify(showsData)} */}
      <BannerCard params={featuredShow!} />
      <ShowList params={trendingParams} />
      <ShowList params={recommendedParams} />
    </main>
  );
}
