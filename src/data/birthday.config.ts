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

  message: `Dear Kirthana,\n\nTwenty years. I've watched you grow from that little girl in the pink dress who used to follow me everywhere, to the incredible, radiant woman you are today — and honestly, it still takes my breath away.\n\nYou have this quiet kind of magic about you. The way you carry yourself, the way you make everyone around you feel seen and loved, the way you smile even when things are hard — it's something truly rare. I've never told you enough how proud I am of you.\n\nThese twenty years haven't always been easy. But through every storm, you've remained you — gentle, strong, and full of light. You've never lost the warmth in your eyes or the kindness in your heart, and that, more than anything, is what makes you extraordinary.\n\nAs you step into your twenties, I want you to know — I'm always in your corner. Always. No matter where life takes you, no matter how far the distance, you will always have a home in my heart.\n\nThank you for being my sister. Thank you for every laugh, every memory, every moment — even the ones where you were absolutely insufferable.\n\nHappy 20th birthday, Kirthana. May this decade be everything you deserve — and you deserve the world.`,

  signature: "With all my love, always — Amrenther 🤍",

  heroPhoto: "/photos/photo-hero.jpg",
  galleryPhotos: [
    "/photos/photo-1.jpg",
    "/photos/photo-2.jpg",
    "/photos/photo-3.jpg",
    "/photos/photo-4.jpg",
    "/photos/photo-5.jpg",
    "/photos/photo-6.jpg",
  ],
  letterPhoto: "/photos/photo-letter.jpg",
};
