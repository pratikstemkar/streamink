import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { IShow } from "@/lib/types";

const BannerCard = ({ params }: { params: IShow }) => {
  return (
    <div className="w-full items-center mb-5">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="space-y-2 w-full lg:w-1/2 lg:px-0 lg:block">
          <div className="hidden lg:block space-y-4">
            <h2 className="text-2xl lg:text-4xl tracking-tight font-extrabold">
              {params.title}
            </h2>
            <h4 className="font-semibold text-sm">
              {params.date.slice(-4)}
              {" • "}
              {params.seasons?.length} Season{" • "}
              {params.subtitles?.length} Subtitles{" • "}
              <span className="dark:bg-slate-500 bg-slate-200 rounded-sm px-1 py-0.5">
                {params.rating}
              </span>
            </h4>
            <p className="text-sm lg:text-base text-slate-500">
              {params.description}
            </p>
            <h4 className="font-semibold text-sm text-slate-500">
              {params.tags?.map((tag, index) => (
                <>
                  {tag}
                  {index !== params.tags?.length - 1 ? (
                    <span className="text-muted">{" | "}</span>
                  ) : null}
                </>
              ))}
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
            <Link href={`/watch/${params.showId}`}>
              <Button
                className="w-full lg:shadow-lg lg:shadow-indigo-500/50 mt-1 lg:hover:scale-x-105 lg:transition lg:ease-in-out lg:delay-150 lg:duration-300"
                size="lg"
              >
                Watch Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative overflow-hidden lg:rounded-lg shadow-lg">
            {/* {!params.trailer && ( */}
            <>
              <Image
                className="rounded-lg"
                src={params.banner}
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
            {/*} )} */}
            {/* {params.trailer && (
              <VideoPlayer videoUrl={params.trailer} autoPlay={true} />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
