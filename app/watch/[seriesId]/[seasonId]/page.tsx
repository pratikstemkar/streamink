import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 16 }).map((_, i, a) => `${i + 1}`);

const Season = ({ params }: { params: { seasonId: string } }) => {
  return (
    <main className="flex flex-col items-center justify-center  lg:px-10 m-auto lg:mt-5 space-y-5">
      <div className="w-full flex flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0">
        <div className="w-full lg:w-3/4 overflow-hidden lg:relative">
          <Image
            src="https://res.cloudinary.com/doa2rj1yw/image/upload/v1692267734/itaewon-class_vqb2ep.jpg"
            alt="video-player"
            className="lg:rounded-lg hidden lg:block"
            fill
            style={{ objectFit: "cover" }}
          />
          <Image
            src="https://res.cloudinary.com/doa2rj1yw/image/upload/v1692267734/itaewon-class_vqb2ep.jpg"
            alt="video-player"
            className="lg:hidden"
            height={1000}
            width={1000}
          />
        </div>
        <div className="w-full lg:w-1/4 space-y-2">
          <h3 className="text-xl font-bold">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Season" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="s1 ">Season 1</SelectItem>
              </SelectContent>
            </Select>
          </h3>
          <ScrollArea className="w-full h-[400px] lg:h-[715px] rounded-lg border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">
                Season 1
              </h4>
              {tags.map((tag) => (
                <div key={tag}>
                  <div
                    className="text-sm flex space-x-2 p-2 rounded-lg hover:cursor-pointer dark:hover:bg-slate-900 hover:bg-slate-100"
                    key={tag}
                  >
                    <Image
                      src="https://res.cloudinary.com/doa2rj1yw/image/upload/v1692267734/itaewon-class_vqb2ep.jpg"
                      alt="video-player"
                      height={200}
                      width={200}
                      className="rounded-lg"
                    />
                    <div className="flex-col justify-between hidden lg:block">
                      <div>
                        <h3 className="font-vold">Episode {tag}</h3>
                        <p className="text-slate-500 text-sm">
                          Lorem ipsum dolor sit amet consectetur...
                        </p>
                      </div>
                      <span className="text-xs">43 mins</span>
                    </div>
                  </div>
                  {/* <Separator className="my-2" /> */}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
};

export default Season;
