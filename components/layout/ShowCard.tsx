import Image from "next/image";
import Link from "next/link";

const ShowCard = ({
  params,
}: {
  params: { title: string; showId: string; thumbnail: string };
}) => {
  return (
    <Link href={`/watch/${params.showId}`} key={params.showId}>
      <div className="relative overflow-hidden rounded-md lg:rounded-lg shadow-lg cursor-pointer mb-1 lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-105 lg:duration-300">
        <Image
          className="rounded-md lg:rounded-lg"
          src={params.thumbnail}
          width={300}
          height={100}
          alt="image"
        />
        <div className="absolute bottom-0 left-0 px-2 py-1 bg-gradient-to-t from-black to-transparent w-full">
          <h4 className="text-sm lg:text-xl font-semibold tracking-tight text-white">
            {params.title}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default ShowCard;
