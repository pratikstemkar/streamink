import ShowList from "@/components/home/ShowList";
import BannerCard from "@/components/layout/BannerCard";
import { IShow, showListParams } from "@/lib/types";
import { getFeaturedShow, getRandomShows } from "@/lib/utils";

const params = {
  title: "Jujutsu Kaisen",
  seriesId: "jujutsukaisen",
  thumbnail:
    "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692263659/satoru-gojo_vtykvf.jpg",
  desc: "Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha&apos;s shōnen mangamagazine Weekly Shōnen Jump since March 2018, with its chapterscollected and published in 23 tankōbon volumes as of July 2023.",
  year: 2020,
  language: 2,
  subtitle: 8,
  seasons: [],
  trailer: null,
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
