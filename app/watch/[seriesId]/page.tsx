import WideShowCard from "@/components/layout/WideShowCard";
import Image from "next/image";
import Link from "next/link";
import { series } from "@/data/series";
import { notFound } from "next/navigation";

type Episode = {
  episode: string;
  title: string;
  thumbnail: string;
};

type Season = {
  season: string;
  thumbnail: string;
  episodes: Array<Episode>;
};

type Show = {
  title: string;
  seriesId: string;
  desc: string;
  thumbnail: string;
  seasons: Array<Season>;
  year: number;
  trailer: string;
  language: number;
  subtitle: number;
};

const Series = ({ params }: { params: { seriesId: string } }) => {
  const foundShow = series?.find((show) => show.seriesId === params.seriesId);
  if (!foundShow) {
    notFound();
  }
  const newShow: Show = {
    title: foundShow?.title!,
    seriesId: foundShow?.seriesId!,
    desc: foundShow?.desc!,
    thumbnail: foundShow?.thumbnail!,
    seasons: foundShow?.seasons!,
    year: foundShow?.year!,
    trailer: foundShow?.trailer!,
    language: foundShow?.language!,
    subtitle: foundShow?.subtitle!,
  };

  return (
    <main className="flex flex-col items-center justify-center  lg:px-10 m-auto lg:mt-5">
      <WideShowCard params={newShow} />
      <div className="w-full px-5 lg:px-0 space-y-2">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">
            {foundShow?.seasons?.length} Season
            {foundShow?.seasons?.length! > 1 ? "s" : ""}
          </h2>
        </div>
        <div className="columns-2 lg:columns-6">
          {foundShow?.seasons?.map((season) => (
            <Link
              href={`/watch/${foundShow?.seriesId}/${season.season}`}
              key={season.season}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer mb-5  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <Image
                  className="rounded-lg"
                  src={season.thumbnail}
                  width={300}
                  height={100}
                  alt="image"
                />
                <div className="absolute bottom-0 left-0 px-2 py-1">
                  <h4 className="text-sm lg:text-xl font-semibold tracking-tight text-white">
                    Season {season.season[season.season.length - 1]}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Series;
