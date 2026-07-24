export interface BirthdayConfig {
  // Person being celebrated
  name: string;                    // Display name on the website
  birthdayDate: string;            // ISO format: "YYYY-MM-DD"
  birthYear: number;               // Year of birth
  turningAge: number;              // Age she is turning

  // Creator info
  fromName: string;                // Your name (shown in letter signature)
  relationship: string;            // e.g., "your brother"

  // Personal message (shown in LetterSection)
  message: string;                 // Multi-line string with \n for breaks
  signature: string;               // Closing line of the letter

  // Photos
  heroPhoto: string;               // Path to hero portrait
  galleryPhotos: string[];         // Array of gallery photo paths
  letterPhoto?: string;            // Optional photo in letter section
}

// ─────────────────────────────────────────
// 🎯 EDIT BELOW — Your personal details
// ─────────────────────────────────────────

export const birthdayConfig: BirthdayConfig = {
  name: "Kirthana",
  birthdayDate: "2026-08-09",
  birthYear: 2006,
  turningAge: 20,

  fromName: "Amrenther",
  relationship: "your brother",

  message: `Dear Kirthana,\n\nTwenty years of you — and every single one has been a gift to everyone around you...\n\nWith love,\nAmrenther`,

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
