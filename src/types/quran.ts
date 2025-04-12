
// Types for Quran data structure
export interface Chapter {
  id: number;
  name: string;
  transliteration: string;
  translation: string;
  type: string;
  total_verses: number;
}

export interface Verse {
  id: number;
  text: string;
  translation: string;
  english_text?: string;
  chapter_id: number;
  verse_number: number;
  subtitle?: string;
  footnote?: string;
}

export interface ChapterTitle {
  chapter_number: number;
  chapter_title_english: string;
  chapter_title_arabic: string;
  chapter_title_persian: string;
}
