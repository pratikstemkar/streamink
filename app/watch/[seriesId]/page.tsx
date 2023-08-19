import WideShowCard from "@/components/layout/WideShowCard";
import Image from "next/image";
import Link from "next/link";
import { series } from "@/data/series";

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
  language: number;
  subtitle: number;
};

const Series = ({ params }: { params: { seriesId: string } }) => {
  const foundShow = series?.find((show) => show.seriesId === params.seriesId);
  const newShow: Show = {
    title: foundShow?.title!,
    seriesId: foundShow?.seriesId!,
    desc: foundShow?.desc!,
    thumbnail: foundShow?.thumbnail!,
    seasons: foundShow?.seasons!,
    year: foundShow?.year!,
    language: foundShow?.language!,
    subtitle: foundShow?.subtitle!,
  };

  return (
    <main className="flex flex-col items-center justify-center px-5 lg:px-10 m-auto mt-5 space-y-5">
      <WideShowCard params={newShow} />
      <div className="w-full space-y-2">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">
            {foundShow?.seasons.length} Season
          </h2>
        </div>
        <div className="columns-2 lg:columns-6">
          {foundShow?.seasons.map((season) => (
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
                  <h4 className="text-xl font-semibold tracking-tight text-white">
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
