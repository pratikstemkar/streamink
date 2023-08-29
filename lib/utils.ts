import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { IShow, IShowsData } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFeaturedShow = (showsData: IShowsData) => {
  const randomIndex = Math.floor(Math.random() * showsData?.shows.length);
  return showsData?.shows[randomIndex];
};

export function getRandomShows<T>(list: T[], count: number): T[] {
  if (count >= list.length) {
    return list; // Return the entire list if count is equal to or larger than list length
  }

  const shuffledList = list.slice(); // Create a copy of the list
  for (let i = shuffledList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
  }

  return shuffledList.slice(0, count);
}

export function limitStringToWords(input: string, wordLimit: number): string {
  const words = input.split(" ");

  if (words.length <= wordLimit) {
    return input;
  }

  const limitedWords = words.slice(0, wordLimit);
  return limitedWords.join(" ") + "...";
}

export function limitStringToCharacters(
  input: string,
  characterLimit: number
): string {
  if (input.length <= characterLimit) {
    return input;
  }

  const limitedString = input.slice(0, characterLimit);
  return limitedString + "...";
}

export function rotateListWithObjectIdAtTop(
  list: any[],
  episodeId: string
): any[] {
  const index = list.findIndex((item) => item.episodeId === episodeId);

  if (index === -1) {
    // Object with given object ID not found, return original list
    return list;
  }

  const rotatedList = [
    ...list.slice(index), // Objects from the specified object to the end
    ...list.slice(0, index), // Objects from the beginning to just before the specified object
  ];

  return rotatedList;
}

export const getRandomObjectsExcluding = (
  array: IShow[],
  count: number,
  exclude: IShow[]
): IShow[] => {
  const availableObjects = array.filter((obj) => !exclude.includes(obj));
  if (availableObjects.length < count) {
    throw new Error("Not enough available objects to choose from.");
  }

  const shuffledArray = availableObjects.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray.slice(0, count);
};

export const getShows = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/shows`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch shows!");
  }

  return res.json();
};

export async function getShow(showId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/shows/${showId}`,
    {
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) {
    throw new Error("Show not Found!");
  }

  return res.json();
}
