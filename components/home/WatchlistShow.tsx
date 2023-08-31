import ShowCard from "../layout/ShowCard";
import { getShow } from "@/lib/utils";

const WatchlistShow = async ({ params }: { params: { showId: string } }) => {
  const showData = await getShow(params.showId);
  return (
    <div className="w-full space-y-2">
      <ShowCard
        params={{
          title: showData.show.title,
          showId: showData.show.showId,
          thumbnail: showData.show.thumbnail,
          watchlist: true,
        }}
        key={showData.show.showId}
      />
    </div>
  );
};

export default WatchlistShow;
