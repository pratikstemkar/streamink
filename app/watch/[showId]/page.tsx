import WideShowCard from "@/components/layout/WideShowCard";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ISeason } from "@/lib/types";
import { getShow } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { showId: string };
}): Promise<Metadata> {
  const foundShow = await getShow(params.showId);
  return {
    title: foundShow?.show.title,
  };
}

const Series = async ({ params }: { params: { showId: string } }) => {
  const foundShow = await getShow(params.showId);
  if (!foundShow) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center justify-center lg:px-10 m-auto lg:mt-5">
      {/* {JSON.stringify(foundShow.show)} */}
      <WideShowCard params={foundShow.show} />
      <div className="w-full px-2 lg:px-0 space-y-2">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">
            {foundShow?.show?.seasons?.length} Season
            {foundShow?.show?.seasons?.length! > 1 ? "s" : ""}
          </h2>
        </div>
        <div className="columns-2 lg:columns-6 gap-1 lg:gap-4">
          {foundShow.show.seasons?.map((season: ISeason) => (
            <Link
              href={`/watch/${foundShow?.show.showId}/${season.seasonId}`}
              key={season.seasonId}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer mb-1 lg:mb-5 lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-105 lg:duration-300">
                <Image
                  className="rounded-lg"
                  src={season.thumbnail}
                  width={300}
                  height={100}
                  alt="image"
                />
                <div className="absolute bottom-0 left-0 px-2 py-1">
                  <h4 className="text-sm lg:text-xl font-semibold tracking-tight text-white">
                    Season {season.seasonId[season.seasonId.length - 1]}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Series;
