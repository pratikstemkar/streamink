import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ShowCard from "../layout/ShowCard";
import { IShow } from "@/lib/types";
import { getShow } from "@/lib/utils";

const WatchlistShow = async ({ params }: { params: { showId: string } }) => {
  const showData = await getShow(params.showId);
  return (
    <div className="w-full space-y-2">
      {/* <div className="columns-2 md:columns-6 gap-1 lg:gap-4"> */}
      <ShowCard
        params={{
          title: showData.show.title,
          showId: showData.show.showId,
          thumbnail: showData.show.thumbnail,
        }}
        key={showData.show.showId}
      />
      {/* </div> */}
    </div>
  );
};

export default WatchlistShow;
