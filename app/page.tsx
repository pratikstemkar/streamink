import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-10 m-auto mt-5 space-y-5">
      <div className="w-full items-center">
        <Card>
          {/* <CardHeader>
            <CardTitle>Jujutsu Kaisen</CardTitle>
          </CardHeader> */}
          <CardContent className="mt-5">
            <div className="flex justify-between items-center">
              <div className="space-y-5 w-1/2">
                <h1 className="text-3xl font-extrabold tracking-tighter">
                  Jujutsu Kaisen
                </h1>
                <p>
                  Jujutsu Kaisen is a Japanese manga series written and
                  illustrated by Gege Akutami. It has been serialized in
                  Shueisha&apos;s shōnen manga magazine Weekly Shōnen Jump since
                  March 2018, with its chapters collected and published in 23
                  tankōbon volumes as of July 2023.
                </p>
                <div className="space-x-4">
                  <Link href="/watch/jujutsukaisen">
                    <Button>Watch Now</Button>
                  </Link>
                  <span>2 Languages</span>
                  <span>8 Subtitles</span>
                </div>
              </div>
              <div>
                <Image
                  className="rounded-lg"
                  src="https://www.cnet.com/a/img/resize/e9afc7426679411d3c456864140ef4e2d2587bd8/hub/2023/07/05/b8503974-3baa-4311-bfa1-5e5b747c83ad/jujutsu-kaisen-season-2.jpg?auto=webp&fit=crop&height=360&width=640"
                  width={800}
                  height={100}
                  alt="jujutsu-wallpaper"
                />
              </div>
            </div>
          </CardContent>
          {/* <CardFooter>Watch now!</CardFooter> */}
        </Card>
      </div>
      <div className="w-full space-y-2">
        <h2 className="text-xl font-bold">Trending</h2>
        <div className="flex space-x-4">
          <Link href="/watch/jujutsukaisen">
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <Image
                className="rounded-lg"
                src="https://www.cnet.com/a/img/resize/e9afc7426679411d3c456864140ef4e2d2587bd8/hub/2023/07/05/b8503974-3baa-4311-bfa1-5e5b747c83ad/jujutsu-kaisen-season-2.jpg?auto=webp&fit=crop&height=360&width=640"
                width={300}
                height={100}
                alt="image"
              />
              <div className="absolute bottom-0 left-0 px-2 py-1">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
                  Jujutsu Kaisen
                </h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full space-y-2">
        <h2 className="text-xl font-bold">Recommended for You</h2>
        <div className="flex space-x-4">
          <Link href="/watch/jujutsukaisen">
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <Image
                className="rounded-lg"
                src="https://www.cnet.com/a/img/resize/e9afc7426679411d3c456864140ef4e2d2587bd8/hub/2023/07/05/b8503974-3baa-4311-bfa1-5e5b747c83ad/jujutsu-kaisen-season-2.jpg?auto=webp&fit=crop&height=360&width=640"
                width={300}
                height={100}
                alt="image"
              />
              <div className="absolute bottom-0 left-0 px-2 py-1">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
                  Jujutsu Kaisen
                </h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
