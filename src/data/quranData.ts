/**
 * Main entry point for accessing Quran data
 * This file exports all necessary data and functions from the Quran modules
 */

// Re-export types
export type { Chapter, Verse, ChapterTitle } from "@/types/quran";

// Re-export data
export { chapters, chapterTitles } from "./chapterData";
export { versesByChapter } from "./verseData";

// Re-export utility functions
export { findChapterAndVerse } from "@/utils/quranUtils";

/**
 * Get all verses for a specific chapter
 * @param chapterId - ID of the chapter to get verses for
 * @returns Array of verses for the specified chapter, or generic sample verses if not found
 */
export const getVerses = (chapterId: number): import("@/types/quran").Verse[] => {
  // Get verses from the versesByChapter object
  const verses = versesByChapter[chapterId as keyof typeof versesByChapter];
  
  if (verses) {
    return verses;
  }
  
  // Fallback for chapters without specific verse data
  // Return sample verses
  return Array.from({ length: 5 }, (_, i) => ({
    id: (chapterId * 100) + i,
    text: `نص آیه ${i + 1} من السورة ${chapterId}`,
    translation: `ترجمه آیه ${i + 1} از سوره ${chapterId}`,
    english_text: `English translation of verse ${i + 1} from Sura ${chapterId}`,
    chapter_id: chapterId,
    verse_number: i + 1
  }));
};
