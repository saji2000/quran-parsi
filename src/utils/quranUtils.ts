
/**
 * Utility functions for Quran data
 */

/**
 * Find a specific chapter and verse based on search input
 * @param query - Search query in format "chapter:verse" or just "chapter"
 * @returns Object with chapterId and verseNumber if found, null otherwise
 */
export const findChapterAndVerse = (query: string): { chapterId: number; verseNumber: number | null } | null => {
  // Parse input format (e.g., "4:13" or "4")
  const parts = query.split(':');
  const chapterId = parseInt(parts[0], 10);
  const verseNumber = parts.length > 1 ? parseInt(parts[1], 10) : null;
  
  // Validate chapter id
  if (isNaN(chapterId) || chapterId < 1 || chapterId > 114) {
    return null;
  }
  
  // If verse number is provided, validate it
  if (verseNumber !== null) {
    if (isNaN(verseNumber) || verseNumber < 1) {
      return null;
    }
    // Note: We can't validate upper bound without checking chapter data
    // This would be improved with complete chapter data
  }
  
  return { chapterId, verseNumber };
};
