import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RecommendedList = () => {
  const recommended = [
    {
      title: "Jujutsu Kaisen",
      seriedId: "jujutsukaisen",
      imgUrl:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692263659/satoru-gojo_vtykvf.jpg",
    },
    {
      title: "Itaewon Class",
      seriedId: "itaewonclass",
      imgUrl:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692267734/itaewon-class_vqb2ep.jpg",
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
    {
      title: "Crash Landing On You",
      seriedId: "crashlanding",
      imgUrl:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692266198/clou_gntccr.jpg",
    },
    {
      title: "It's Okay To Not Be Okay",
      seriedId: "iotnbo",
      imgUrl:
        "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692266342/iotnbo_aseyzv.jpg",
    },
  ];

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Recommended for You</h2>
        <Link href="/browse/recommended">
          <ArrowRight />
        </Link>
      </div>
      <div className="flex space-x-4 overflow-x-auto">
        {recommended?.map((series) => (
          <Link href={`/watch/${series.seriedId}`} key={series.seriedId}>
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <Image
                className="rounded-lg"
                src={series.imgUrl}
                width={300}
                height={100}
                alt="image"
              />
              <div className="absolute bottom-0 left-0 px-2 py-1">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
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

export default RecommendedList;
