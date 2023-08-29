import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Subscribe",
};

const Subscribe = () => {
  return (
    <main className="flex flex-col items-center justify-center px-2 lg:px-10 m-auto mt-2 lg:mt-5 space-y-5">
      <div className="flex flex-col-reverse lg:flex-row w-full justify-center items-center lg:space-x-5">
        <div className="lg:w-1/2 space-y-5 mt-5 justify-center">
          <h1 className="text-4xl font-extrabold">
            Subscribe now and start streaming
          </h1>
          <p className="text-sm">
            {`Welcome to ${process.env.NEXT_PUBLIC_APP_NAME}! By subscribing to our streaming app, you're opening the door to a world of endless entertainment. Enjoy unlimited access to a diverse range of movies, shows, and exclusive content that will keep you hooked. Thank you for choosing us to be your source of entertainment!`}
          </p>
          <Button variant="outline" className="rounded-full text-yellow-500">
            Subscribe
          </Button>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="https://res.cloudinary.com/doa2rj1yw/image/upload/v1692613369/netflix-back_zwhku2.jpg"
            alt="itaewon-class"
            height={500}
            width={1000}
            className="rounded-lg"
          />
        </div>
      </div>
    </main>
  );
};

export default Subscribe;
