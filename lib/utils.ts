import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { IShowsData } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFeaturedShow = (showsData: IShowsData) => {
  const randomIndex = Math.floor(Math.random() * showsData?.shows.length);
  return showsData?.shows[randomIndex];
};

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
