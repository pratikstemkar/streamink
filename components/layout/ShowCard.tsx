"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useToast } from "../ui/use-toast";

const removeFromWatchlist = (userId: string, showId: string) => {
  axios
    .put(`${process.env.NEXT_PUBLIC_APP_URL}/api/shows/watchlist`, {
      userId: userId,
      showId: showId,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log("Error: " + err);
    });
};

const ShowCard = ({
  params,
}: {
  params: {
    title: string;
    showId: string;
    thumbnail: string;
    watchlist: boolean;
  };
}) => {
  const router = useRouter();
  const { toast } = useToast();
  const { data: session } = useSession();
  const trashClick = () => {
    // @ts-ignore
    removeFromWatchlist(session?.user?.id, params.showId);
    toast({
      title: "Show removed from Watchlist!",
    });
    router.refresh();
  };
  return (
    <div
      className="relative overflow-hidden rounded-md lg:rounded-lg shadow-lg cursor-pointer mb-1 lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-105 lg:duration-300"
      key={params.showId}
    >
      <Image
        className="rounded-md lg:rounded-lg"
        src={params.thumbnail}
        width={300}
        height={100}
        alt="image"
        onClick={() => router.push(`/watch/${params.showId}`)}
      />
      {params.watchlist && (
        <div className="absolute top-0 right-0 px-2 py-1">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-red-500 active:bg-red-800"
            onClick={trashClick}
          >
            <Trash2 className="h-4 w-4 text-white" />
          </Button>
        </div>
      )}
      <div
        className="absolute bottom-0 left-0 px-2 py-1 bg-gradient-to-t from-black to-transparent w-full"
        onClick={() => router.push(`/watch/${params.showId}`)}
      >
        <h4 className="text-sm lg:text-xl font-semibold tracking-tight text-white">
          {params.title}
        </h4>
      </div>
    </div>
  );
};

export default ShowCard;
