import ShowList from "@/components/home/ShowList";
import { IShow, showListParams } from "@/lib/types";
import { getRandomShows, getShows } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recommended for You",
};

const Recommended = async () => {
  const showsData = await getShows();

  const recommendedShows = getRandomShows(showsData.shows, 12);
  const recommendedParams: showListParams = {
    title: "Recommended for You",
    link: "recommended",
    list: recommendedShows as Array<IShow>,
  };

  return (
    <main className="flex flex-col items-center justify-center px-2 md:px-10 m-auto mt-5 space-y-5">
      <div className="w-full space-y-2">
        <ShowList params={recommendedParams} />
      </div>
    </main>
  );
};

export default Recommended;
