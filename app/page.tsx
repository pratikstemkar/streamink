import RecommendedList from "@/components/home/RecommendedList";
import TrendingList from "@/components/home/TrendingList";
import WideShowCard from "@/components/layout/WideShowCard";

const params = {
  title: "Jujutsu Kaisen",
  seriesId: "jujutsukaisen",
  thumbnail:
    "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692263659/satoru-gojo_vtykvf.jpg",
  desc: "Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha&apos;s shōnen mangamagazine Weekly Shōnen Jump since March 2018, with its chapterscollected and published in 23 tankōbon volumes as of July 2023.",
  year: 2020,
  language: 2,
  subtitle: 8,
  seasons: [],
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-5 md:px-10 m-auto mt-5 ">
      <WideShowCard params={params} />
      <TrendingList />
      <RecommendedList />
    </main>
  );
}
