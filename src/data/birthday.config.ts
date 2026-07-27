/* ─────────────────────────────────────────
   🎯 Kirthana's Birthday Config
   This is the ONLY file you need to edit
   to personalize the entire website.
   ─────────────────────────────────────────── */

export interface BirthdayConfig {
  // Person being celebrated
  name: string;
  birthdayDate: string;     // ISO format: "YYYY-MM-DD"
  birthYear: number;
  turningAge: number;

  // Creator info
  fromName: string;
  relationship: string;     // e.g., "your brother"

  // Personal message (shown in LetterSection)
  message: string;          // Use \n for paragraph breaks
  signature: string;        // Closing line of the letter

  // Photos
  heroPhoto: string;
  galleryPhotos: string[];
  letterPhoto?: string;
}

export const birthdayConfig: BirthdayConfig = {
  name: "Kirthana",
  birthdayDate: "2026-08-09",
  birthYear: 2006,
  turningAge: 20,

  fromName: "Amrenther",
  relationship: "your brother",

  message: `Dear Kirthana,
Happy 20th Birthday! 🎉
Watching you grow into such a kind, strong, and wonderful person has been one of my greatest joys. I'm so proud to have you as my sister.

May this new chapter bring you happiness, success, good health, and countless beautiful memories. Keep smiling and chasing your dreams.

Happy Birthday once again! Wishing you a lifetime of happiness. ❤️`,

  signature: "always — Amrenther 🤍",

  heroPhoto: "/photos/photo-hero.jpg",
  galleryPhotos: [
    "/photos/photo-1.jpg",
    "/photos/photo-2.jpg",
    "/photos/photo-3.jpg",
    "/photos/photo-4.jpg",
    "/photos/photo-5.jpg",
    "/photos/photo-6.jpg",
  ],
  letterPhoto: "/photos/photo-4.jpg",
};
