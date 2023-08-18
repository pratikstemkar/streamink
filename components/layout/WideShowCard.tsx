import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

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
    seasons: [];
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
          <div>
            <Link
              href={`/watch/${params.seriesId}${
                params.seasons.length > 0
                  ? "/" + params?.seasons[0].season
                  : null
              }`}
            >
              <Button>
                Watch{" "}
                {params.seasons.length > 0
                  ? "Season " + params?.seasons[0].season
                  : "Now"}
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
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
              params.seasons.length > 0 ? "/" + params?.seasons[0].season : null
            }`}
          >
            <Button className="mt-2 lg:hidden w-full">
              Watch{" "}
              {params.seasons.length > 0
                ? "Season " + params?.seasons[0].season
                : "Now"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WideShowCard;
