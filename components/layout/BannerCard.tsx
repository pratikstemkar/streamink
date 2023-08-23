import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Plus, PlusIcon, Share } from "lucide-react";
import VideoPlayer from "../watch/VideoPlayer";

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

const BannerCard = ({
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
    trailer: string | null;
    seasons: Array<Season>;
  };
}) => {
  return (
    <div className="w-full items-center mb-5">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="space-y-2 w-full lg:w-1/2 lg:px-0 lg:block">
          <div className="hidden lg:block space-y-4">
            <h2 className="text-2xl lg:text-4xl tracking-tight font-extrabold">
              {params.title}
            </h2>
            <h4 className="font-semibold text-sm">
              {params.year}
              {" • "}
              {params.seasons?.length} Season{" • "}
              {params.language} Languages{" • "}
              <span className="bg-slate-500 rounded-sm px-1 py-0.5">
                U/A 16+
              </span>
            </h4>
            <p className="text-sm lg:text-base text-slate-500">{params.desc}</p>
            <h4 className="font-semibold text-sm text-slate-500">
              Thriller<span className="text-muted">{" | "}</span>Drama
              <span className="text-muted">{" | "}</span>Romance
            </h4>
            {/* <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                <span>Add to Watchlist</span>
              </Button>
              <Button variant="link" size="sm">
                <Share className="mr-2 h-4 w-4" />
                <span>Share</span>
              </Button>
            </div> */}
          </div>
          <div className="lg:flex space-x-2 items-center">
            <Link
              href={`/watch/${params.seriesId}${
                params.seasons?.length > 0
                  ? "/" + params?.seasons[0].season
                  : ""
              }`}
            >
              <Button
                className="w-full lg:shadow-lg lg:shadow-indigo-500/50 mt-1"
                size="lg"
              >
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
        <div className="flex flex-col">
          <div className="relative overflow-hidden lg:rounded-lg shadow-lg">
            {!params.trailer && (
              <>
                <Image
                  className="rounded-lg"
                  src={params.thumbnail}
                  width={800}
                  height={100}
                  alt="image"
                />
                <div className="absolute bottom-0 left-0 px-2 py-1 lg:hidden">
                  <h4 className="text-xl font-semibold tracking-tight text-white">
                    {params.title}
                  </h4>
                </div>
              </>
            )}
            {params.trailer && (
              <VideoPlayer videoUrl={params.trailer} autoPlay={true} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
