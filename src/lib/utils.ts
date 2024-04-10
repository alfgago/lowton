import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isEmpty(value: string | number | null | undefined) {
	return value === null || value === undefined || value === "";
}

export function hasContent(content: string | null | undefined): boolean {
	if (!content) return false;  
  
	// Check directly for empty <p></p>
	return content.trim() !== '<p></p>'; 
  }