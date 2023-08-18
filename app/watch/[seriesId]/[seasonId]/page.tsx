import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ScrollArea } from "@/components/ui/scroll-area";

import { series } from "@/data/series";

const tags = Array.from({ length: 16 }).map((_, i, a) => `${i + 1}`);

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
    <main className="flex flex-col items-center justify-center  lg:px-10 m-auto lg:mt-5 space-y-5">
      <div className="w-full flex flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0">
        <div className="w-full lg:w-3/4 overflow-hidden lg:relative">
          <Image
            src={foundSeason?.thumbnail}
            alt="video-player"
            className="lg:rounded-lg hidden lg:block"
            fill
            style={{ objectFit: "cover" }}
          />
          {/* mobile video player */}
          <Image
            src="https://res.cloudinary.com/doa2rj1yw/image/upload/v1692267734/itaewon-class_vqb2ep.jpg"
            alt="video-player"
            className="lg:hidden"
            height={1000}
            width={1000}
          />
        </div>
        <div className="w-full lg:w-1/4 space-y-2">
          <h3 className="text-xl font-bold">
            <Select>
              <SelectTrigger className="w-[180px]">
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
          <ScrollArea className="w-full h-[400px] lg:h-[715px] rounded-lg border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">
                Season {foundSeason?.season[foundSeason.season.length - 1]}
              </h4>
              {foundSeason?.episodes.map((episode) => (
                <div key={episode.episode}>
                  <div className="text-sm flex space-x-2 p-2 rounded-lg hover:cursor-pointer dark:hover:bg-slate-900 hover:bg-slate-100">
                    <Image
                      src={episode.thumbnail}
                      alt="episode image"
                      height={200}
                      width={200}
                      className="rounded-lg"
                    />
                    <div className="flex-col justify-between hidden lg:block">
                      <div>
                        <h3 className="font-vold">{episode.title}</h3>
                        <p className="text-slate-500 text-sm">
                          Lorem ipsum dolor sit amet consectetur...
                        </p>
                      </div>
                      <span className="text-xs">43 mins</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
};

export default Season;
