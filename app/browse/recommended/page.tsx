import ShowCard from "@/components/layout/ShowCard";
import Image from "next/image";
import Link from "next/link";

const Recommended = () => {
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

  return (
    <main className="flex flex-col items-center justify-center px-5 md:px-10 m-auto mt-5 space-y-5">
      <div className="w-full">
        <h1 className="text-2xl font-extrabold">Recommended</h1>
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
    </main>
  );
};

export default Recommended;
