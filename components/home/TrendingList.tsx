import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TrendingList = () => {
  const trending = [
    {
      title: "Jujutsu Kaisen",
      seriedId: "jujutsukaisen",
      imgUrl:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692263659/satoru-gojo_vtykvf.jpg",
    },
    {
      title: "Start-Up",
      seriedId: "startup",
      imgUrl:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692266261/start-up_nqgb2n.jpg",
    },
    {
      title: "It's Okay To Not Be Okay",
      seriedId: "iotnbo",
      imgUrl:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692266342/iotnbo_aseyzv.jpg",
    },
    {
      title: "Bojack Horseman",
      seriedId: "bojackhorseman",
      imgUrl:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692279386/bojack_zookqd.jpg",
    },
    {
      title: "Rent a Girlfriend",
      seriedId: "rentagirlfriend",
      imgUrl:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692264341/rent-a-girlfriend_my393j.png",
    },
    {
      title: "Vincenzo",
      seriedId: "vincenzo",
      imgUrl:
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
          <Link href={`/watch/${series.seriedId}`} key={series.seriedId}>
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer mb-5">
              <Image
                className="rounded-lg"
                src={series.imgUrl}
                width={300}
                height={100}
                alt="image"
              />
              <div className="absolute bottom-0 left-0 px-2 py-1">
                <h4 className="text-sm md:text-xl font-semibold tracking-tight text-white">
                  {series.title}
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingList;
