import { Button } from "@/components/ui/button";
import Image from "next/image";

const Subscribe = () => {
  return (
    <main className="flex flex-col items-center justify-center px-10 m-auto mt-5 space-y-5">
      <div className="flex w-full justify-center items-center">
        <div className="w-1/2 space-y-5">
          <h1 className="text-4xl font-extrabold">
            Subscribe now and start streaming
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            rerum dolor facilis blanditiis dicta, a ullam vitae quos nostrum
            iure voluptatum ut, recusandae sunt! Et quis facilis expedita earum
            praesentium?
          </p>
          <Button variant="outline" className="rounded-full text-yellow-500">
            Pay Subscription
          </Button>
        </div>
        <div className="w-1/2">
          <Image
            src="https://res.cloudinary.com/doa2rj1yw/image/upload/v1692267734/itaewon-class_vqb2ep.jpg"
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
