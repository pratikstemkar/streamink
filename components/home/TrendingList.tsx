import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ShowCard from "../layout/ShowCard";

const TrendingList = () => {
  const trending = [
    {
      title: "Jujutsu Kaisen",
      seriedId: "jujutsukaisen",
      thumbnail:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692263659/satoru-gojo_vtykvf.jpg",
    },
    {
      title: "Start-Up",
      seriedId: "startup",
      thumbnail:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692266261/start-up_nqgb2n.jpg",
    },
    {
      title: "It's Okay To Not Be Okay",
      seriedId: "iotnbo",
      thumbnail:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692266342/iotnbo_aseyzv.jpg",
    },
    {
      title: "Bojack Horseman",
      seriedId: "bojackhorseman",
      thumbnail:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692279386/bojack_zookqd.jpg",
    },
    {
      title: "Rent a Girlfriend",
      seriedId: "rentagirlfriend",
      thumbnail:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692264341/rent-a-girlfriend_my393j.png",
    },
    {
      title: "Vincenzo",
      seriedId: "vincenzo",
      thumbnail:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692266168/vincenzo_vrpdio.jpg",
    },
  ];

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Trending Now</h2>
        <Link href="/browse/trending">
          <ArrowRight />
        </Link>
      </div>
      <div className="columns-2 md:columns-6">
        {trending?.map((series) => (
          <ShowCard
            params={{
              title: series.title,
              seriesId: series.seriedId,
              thumbnail: series.thumbnail,
            }}
            key={series.seriedId}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingList;
