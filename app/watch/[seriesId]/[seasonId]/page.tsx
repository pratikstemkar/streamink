import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { series } from "@/data/series";
import VideoPlayer from "@/components/watch/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Plus, Share } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { seriesId: string; seasonId: string };
}): Promise<Metadata> {
  const foundShow = series?.find((show) => show.seriesId === params.seriesId);
  const foundSeason = foundShow?.seasons.find(
    (season) => season.season === params.seasonId
  );
  return {
    title:
      foundShow?.title +
      " - Season " +
      foundSeason?.season[foundSeason?.season.length - 1],
  };
}

const Season = ({
  params,
}: {
  params: { seriesId: string; seasonId: string };
}) => {
  const foundShow = series?.find((show) => show.seriesId === params.seriesId);
  const foundSeason = foundShow?.seasons.find(
    (season) => season.season === params.seasonId
  );

  return (
    <main className="flex flex-col items-center justify-center lg:px-10 m-auto lg:mt-5 space-y-5">
      <div className="w-full flex flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0">
        <div className="w-full lg:w-3/4">
          <div>
            <VideoPlayer videoUrl={foundShow?.trailer!} autoPlay={false} />
          </div>
          <div className="flex w-full px-5 mt-2">
            <div className="w-full space-y-2">
              <h2 className="text-2xl lg:text-4xl tracking-tight font-extrabold">
                {foundShow?.title}
                {" - "}
                {"Trailer"}
              </h2>
              <h4 className="font-semibold text-sm">
                {foundShow?.year}
                {" • "}
                {foundShow?.seasons.length} Season{" • "}
                {foundShow?.language} Languages{" • "}
                <span className="dark:bg-slate-500 bg-slate-200 rounded-sm px-1 py-0.5">
                  U/A 16+
                </span>
              </h4>
              <p className="text-sm lg:text-base text-slate-500">
                {foundShow?.desc}
              </p>
              <h4 className="font-semibold text-sm text-slate-500">
                Thriller<span className="text-muted">{" | "}</span>Drama
                <span className="text-muted">{" | "}</span>Romance
              </h4>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  <span>Add to Watchlist</span>
                </Button>
                <Button variant="link" size="sm">
                  <Share className="mr-2 h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 space-y-2 px-5 lg:px-0">
          <h3 className="text-xl font-bold">
            <Select>
              <SelectTrigger className="w-[155px]">
                <SelectValue
                  placeholder={
                    "Season " + params.seasonId[params.seasonId.length - 1]
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {foundShow?.seasons.map((season) => (
                  <SelectItem value={season.season} key={season.season}>
                    Season {season.season[season.season.length - 1]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </h3>
          <div>
            {foundSeason?.episodes.map((episode) => (
              <div key={episode.episode}>
                <div className="text-sm flex space-x-2 p-2 rounded-lg hover:cursor-pointer dark:hover:bg-slate-900 hover:bg-slate-100">
                  <Image
                    src={episode.thumbnail}
                    alt="episode image"
                    height={150}
                    width={150}
                    className="rounded-lg"
                  />
                  <div className="flex-col justify-between space-y-1">
                    <div>
                      <h3 className="font-bold">{episode.title}</h3>
                      <p className="text-slate-500 text-xs">
                        Lorem ipsum dolor sit amet consectetur...
                      </p>
                    </div>
                    <span className="text-xs dark:bg-indigo-500 bg-indigo-200 px-1 py-0.5 rounded-sm">
                      43 mins
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Season;
