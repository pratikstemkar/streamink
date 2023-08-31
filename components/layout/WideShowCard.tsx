"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Plus, PlusIcon, Share } from "lucide-react";
import { IShow } from "@/lib/types";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useToast } from "../ui/use-toast";

async function addToWatchlist(userId: string, showId: string) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/shows/watchlist`,
    {
      userId: userId,
      showId: showId,
    }
  );
  if (!res) {
    throw new Error("Show not added to watchlist!");
  }

  return res.data;
}

const WideShowCard = ({ params }: { params: IShow }) => {
  const { data: session } = useSession();
  const { toast } = useToast();

  const shareLink = () => {
    navigator.clipboard.writeText(window.location.toString());
    toast({
      title: "Link copied to clipboard.",
    });
  };

  const watchlistClick = () => {
    // @ts-ignore
    addToWatchlist(session?.user?.id, params.showId);
    toast({
      title: "Show added to watchlist",
    });
  };

  return (
    <div className="w-full items-center mb-5">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="space-y-2 lg:w-1/2 px-2 lg:px-0 lg:block">
          <h2 className="text-2xl lg:text-4xl tracking-tight font-extrabold">
            {params.title}
          </h2>
          <h4 className="font-semibold text-sm">
            {params.date.slice(-4)}
            {" • "}
            {params.seasons?.length} Season{" • "}
            {params.subtitles.length} Languages{" • "}
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
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={watchlistClick}>
              <Plus className="mr-2 h-4 w-4" />
              <span>Add to Watchlist</span>
            </Button>
            <Button variant="link" size="sm" onClick={shareLink}>
              <Share className="mr-2 h-4 w-4" />
              <span>Share</span>
            </Button>
          </div>
          <div className="lg:flex">
            <Link
              href={`/watch/${params.showId}${
                params.seasons?.length > 0
                  ? "/" + params?.seasons[0].seasonId
                  : ""
              }`}
            >
              <Button
                className="w-full lg:shadow-lg lg:shadow-indigo-500/50 mt-1 lg:hover:scale-x-105 lg:transition lg:ease-in-out lg:delay-150 lg:duration-300"
                size="lg"
              >
                Watch{" "}
                {params.seasons?.length > 0
                  ? "Season " +
                    params?.seasons[0].seasonId[
                      params?.seasons[0].seasonId.length - 1
                    ]
                  : "Now"}
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col px-2 pt-2 pb-2 lg:p-0">
          <div className="relative overflow-hidden">
            {/* {!params.trailer && ( */}
            <>
              <Image
                className="rounded-lg"
                src={params.banner}
                width={800}
                height={100}
                alt={params.title + " banner"}
              />
              {/* <div className="absolute bottom-0 left-0 px-2 py-1 lg:hidden">
                <h4 className="text-xl font-semibold tracking-tight text-white">
                  {params.title}
                </h4>
              </div> */}
            </>
            {/* )} */}
            {/* {params.trailer && (
              <VideoPlayer videoUrl={params.trailer} autoPlay={true} />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WideShowCard;
