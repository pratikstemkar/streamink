import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ShowCard from "../layout/ShowCard";
import { IShow } from "@/lib/types";

const ShowList = ({
  params,
}: {
  params: { title: string; link: string; list: Array<IShow> };
}) => {
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">{params.title}</h2>
        <Link href={`/browse/${params.link}`}>
          <ArrowRight className="hover:scale-x-125" />
        </Link>
      </div>
      <div className="columns-2 md:columns-6">
        {params.list?.map((show) => (
          <ShowCard
            params={{
              title: show.title,
              showId: show.showId,
              thumbnail: show.thumbnail,
            }}
            key={show.showId}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowList;