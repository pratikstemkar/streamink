import RecommendedList from "@/components/home/RecommendedList";
import TrendingList from "@/components/home/TrendingList";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-5 md:px-10 m-auto mt-5 space-y-5">
      <div className="w-full items-center">
        <div className="flex justify-between items-center">
          <div className="space-y-5 w-1/2 hidden md:block">
            <h1 className="text-3xl font-extrabold tracking-tighter">
              Jujutsu Kaisen
            </h1>
            <p>
              Jujutsu Kaisen is a Japanese manga series written and illustrated
              by Gege Akutami. It has been serialized in Shueisha&apos;s shōnen
              manga magazine Weekly Shōnen Jump since March 2018, with its
              chapters collected and published in 23 tankōbon volumes as of July
              2023.
            </p>
            <div className="text-slate-500 font-mono">
              <span>2 Languages</span>
              {" | "}
              <span>8 Subtitles</span>
            </div>
            <div>
              <Link href="/watch/jujutsukaisen">
                <Button>Watch Now</Button>
              </Link>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <Image
                className="rounded-lg"
                src="https://res.cloudinary.com/doa2rj1yw/image/upload/v1692263659/satoru-gojo_vtykvf.jpg"
                width={800}
                height={100}
                alt="image"
              />
              <div className="absolute bottom-0 left-0 px-2 py-1 md:hidden">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
                  Jujutsu Kaisen
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrendingList />
      <RecommendedList />
    </main>
  );
}
