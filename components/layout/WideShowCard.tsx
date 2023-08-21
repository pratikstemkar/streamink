import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";

type Episode = {
  episode: string;
  title: string;
  thumbnail: string;
};

type Season = {
  season: string;
  episodes: Array<Episode>;
  thumbnail: string;
};

const WideShowCard = ({
  params,
}: {
  params: {
    title: string;
    seriesId: string;
    thumbnail: string;
    desc: string;
    year: number;
    language: number;
    subtitle: number;
    seasons: Array<Season>;
  };
}) => {
  return (
    <div className="w-full items-center mb-5">
      <div className="flex justify-between items-center">
        <div className="space-y-5 w-1/2 hidden md:block">
          <h1 className="text-3xl font-extrabold tracking-tighter">
            {params.title}
          </h1>
          <p>{params.desc}</p>
          <div className="text-slate-500 font-mono">
            <span>{params.year}</span>
            {" | "}
            <span>{params.language} Languages</span>
            {" | "}
            <span>{params.subtitle} Subtitles</span>
          </div>
          <div className="flex items-center  space-x-5">
            <Link
              href={`/watch/${params.seriesId}${
                params.seasons.length > 0 ? "/" + params?.seasons[0].season : ""
              }`}
            >
              <Button className="shadow-lg shadow-indigo-500/50" size="lg">
                Watch{" "}
                {params.seasons.length > 0
                  ? "Season " +
                    params?.seasons[0].season[
                      params?.seasons[0].season.length - 1
                    ]
                  : "Now"}
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              className="rounded-lg"
              src={params.thumbnail}
              width={800}
              height={100}
              alt="image"
            />
            <div className="absolute bottom-0 left-0 px-2 py-1 md:hidden">
              <h4 className="text-xl font-semibold tracking-tight text-white">
                {params.title}
              </h4>
            </div>
          </div>
          <Link
            href={`/watch/${params.seriesId}${
              params.seasons.length > 0 ? "/" + params?.seasons[0].season : ""
            }`}
          >
            <Button className="mt-2 lg:hidden w-full">
              Watch{" "}
              {params.seasons.length > 0
                ? "Season " +
                  params?.seasons[0].season[
                    params?.seasons[0].season.length - 1
                  ]
                : "Now"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WideShowCard;
