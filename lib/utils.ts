import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertAmountFromMiliunits(amount: number) {
  return amount / 1000;
}

export function convertAmountToMiliunits(amount: number) {
  return Math.round(amount * 1000);
}

export function parseLocaleNumber(numberString: string) {
  // Replace comma with dot
  const normalizedString = numberString?.replace(",", ".");
  // Parse the float value
  return parseFloat(normalizedString);
}
