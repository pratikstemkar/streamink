"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ShowCard from "../layout/ShowCard";
import { useAppSelector } from "@/redux/hooks";

const RecommendedList = () => {
  const recommended = [
    {
      title: "Jujutsu Kaisen",
      seriedId: "jujutsukaisen",
      thumbnail:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692263659/satoru-gojo_vtykvf.jpg",
    },
    {
      title: "Itaewon Class",
      seriedId: "itaewonclass",
      thumbnail:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692267734/itaewon-class_vqb2ep.jpg",
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
    {
      title: "Crash Landing On You",
      seriedId: "crashlanding",
      thumbnail:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692266198/clou_gntccr.jpg",
    },
    {
      title: "It's Okay To Not Be Okay",
      seriedId: "iotnbo",
      thumbnail:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692266342/iotnbo_aseyzv.jpg",
    },
  ];

  const shows = useAppSelector((state) => state.show.value);

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Recommended for You</h2>
        <Link href="/browse/recommended">
          <ArrowRight />
        </Link>
      </div>
      <div className="columns-2 md:columns-6">
        {recommended?.map((series) => (
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

export default RecommendedList;
