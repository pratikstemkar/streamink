import { IEpisode, ISeason } from "@/lib/types";
import { Metadata } from "next";
import { notFound, useRouter } from "next/navigation";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import VideoPlayer from "@/components/watch/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Plus, Share } from "lucide-react";
import { limitStringToWords, rotateListWithObjectIdAtTop } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { showId: string; seasonId: string; episodeId: string };
}): Promise<Metadata> {
  const foundShow = await getShow(params.showId);

  const foundSeason = foundShow?.show.seasons.find(
    (season: ISeason) => season.seasonId === params.seasonId
  );

  const foundEpisode = foundSeason?.episodes.find(
    (episode: IEpisode) => episode.episodeId === params.episodeId
  );

  return {
    title:
      foundShow?.show.title +
      " - S" +
      foundSeason?.seasonId.slice(1) +
      "E" +
      foundEpisode?.episodeId.slice(2),
  };
}

async function getShow(showId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/shows/${showId}`,
    {
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const Episode = async ({
  params,
}: {
  params: { showId: string; seasonId: string; episodeId: string };
}) => {
  const foundShow = await getShow(params.showId);
  if (!foundShow) {
    notFound();
  }
  const foundSeason = foundShow?.show.seasons.find(
    (season: ISeason) => season.seasonId === params.seasonId
  );
  const foundEpisode = foundSeason?.episodes.find(
    (episode: IEpisode) => episode.episodeId === params.episodeId
  );

  return (
    <main className="flex flex-col items-center justify-center lg:px-10 lg:m-20 lg:mt-5 space-y-5">
      <div className="w-full flex flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0">
        <div className="w-full lg:w-3/4">
          <div>
            <VideoPlayer videoUrl={foundEpisode?.video!} autoPlay={false} />
          </div>
          <div className="flex w-full px-5 mt-2">
            <div className="w-full space-y-2">
              <h2 className="text-2xl lg:text-4xl tracking-tight font-extrabold">
                {foundShow?.show.title}
                {" - S"}
                {foundSeason?.seasonId.slice(1)}
                {"E"}
                {foundEpisode?.episodeId.slice(2)}
              </h2>
              <h4 className="font-semibold text-sm">
                {foundShow?.show.date.slice(-4)}
                {" • "}
                <Link href={`/watch/${foundShow?.show.showId}`}>
                  {foundShow?.show.seasons.length} Season
                  {foundShow?.show.seasons.length > 1 ? "s" : ""}
                </Link>
                {" • "}
                {foundShow?.show.subtitles.length} Subtitle
                {foundShow?.show.subtitles.length > 1 ? "s" : ""}
                {" • "}
                <span className="dark:bg-slate-500 bg-slate-200 rounded-sm px-1 py-0.5">
                  {foundShow?.show.rating}
                </span>
              </h4>
              <p className="text-sm lg:text-base text-slate-500">
                {foundEpisode?.description}
              </p>
              <h4 className="font-semibold text-sm text-slate-500">
                {foundShow?.show.tags?.map((tag: string, index: number) => (
                  <>
                    {tag}
                    {index !== foundShow?.show.tags?.length - 1 ? (
                      <span className="text-muted">{" | "}</span>
                    ) : null}
                  </>
                ))}
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
                {foundShow?.show.seasons.map((season: ISeason) => (
                  <SelectItem value={season.seasonId} key={season.seasonId}>
                    Season {season.seasonId[season.seasonId.length - 1]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </h3>
          <div>
            {rotateListWithObjectIdAtTop(
              foundSeason?.episodes,
              foundEpisode?.episodeId
            ).map((episode: IEpisode, index: number) => (
              <Link
                href={`/watch/${foundShow.show.showId}/${foundSeason.seasonId}/${episode.episodeId}`}
                key={episode.episodeId}
              >
                <div
                  className={`text-sm flex space-x-2 p-2 rounded-lg hover:cursor-pointer dark:hover:bg-slate-900 hover:bg-slate-100 ${
                    index == 0 ? "dark:bg-slate-900 bg-slate-100" : ""
                  }`}
                >
                  <Image
                    src={episode.thumbnail}
                    alt="episode image"
                    height={150}
                    width={150}
                    className="rounded-lg"
                  />
                  <div className="flex-col justify-between space-y-1">
                    <h3 className="font-bold">
                      {"Episode " + episode.episodeId.slice(2)}
                    </h3>
                    <p className="text-slate-500 text-xs">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="text-left">
                            {limitStringToWords(episode.description, 8)}
                          </TooltipTrigger>
                          <TooltipContent className="w-[300px] hidden lg:block">
                            <p>{episode.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </p>
                    <div className="text-xs">{episode.duration} mins</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Episode;
