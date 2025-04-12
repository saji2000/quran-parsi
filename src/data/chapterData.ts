
import { Chapter, ChapterTitle } from "@/types/quran";

// Chapter titles data
export const chapterTitles: ChapterTitle[] = [
  {
    chapter_number: 1,
    chapter_title_english: "The Key",
    chapter_title_arabic: "الفاتحة",
    chapter_title_persian: "کليد"
  },
  {
    chapter_number: 2,
    chapter_title_english: "The Heifer",
    chapter_title_arabic: "البقرة",
    chapter_title_persian: "ماده گاو"
  },
  {
    chapter_number: 3,
    chapter_title_english: "The Family of Imran",
    chapter_title_arabic: "آل عمران",
    chapter_title_persian: "خانواده عمران"
  },
  {
    chapter_number: 4,
    chapter_title_english: "The Women",
    chapter_title_arabic: "النساء",
    chapter_title_persian: "زنان"
  },
  {
    chapter_number: 5,
    chapter_title_english: "The Feast",
    chapter_title_arabic: "المائدة",
    chapter_title_persian: "مائده"
  },
  {
    chapter_number: 6,
    chapter_title_english: "The Cattle",
    chapter_title_arabic: "الأنعام",
    chapter_title_persian: "چهارپايان"
  },
  {
    chapter_number: 7,
    chapter_title_english: "The Heights",
    chapter_title_arabic: "الأعراف",
    chapter_title_persian: "اعراف"
  }
];

// Sample chapters data (merged with chapter titles)
export const chapters: Chapter[] = [
  {
    id: 1,
    name: "الفاتحة",
    transliteration: "Al-Fatihah",
    translation: "کليد",
    type: "Meccan",
    total_verses: 7
  },
  {
    id: 2,
    name: "البقرة",
    transliteration: "Al-Baqarah",
    translation: "ماده گاو",
    type: "Medinan",
    total_verses: 286
  },
  {
    id: 3,
    name: "آل عمران",
    transliteration: "Aal-Imran",
    translation: "خانواده عمران",
    type: "Medinan",
    total_verses: 200
  },
  {
    id: 4,
    name: "النساء",
    transliteration: "An-Nisa",
    translation: "زنان",
    type: "Medinan",
    total_verses: 176
  },
  {
    id: 5,
    name: "المائدة",
    transliteration: "Al-Ma'idah",
    translation: "مائده",
    type: "Medinan",
    total_verses: 120
  },
  {
    id: 6,
    name: "الأنعام",
    transliteration: "Al-An'am",
    translation: "چهارپايان",
    type: "Meccan",
    total_verses: 165
  },
  {
    id: 7,
    name: "الأعراف",
    transliteration: "Al-A'raf",
    translation: "اعراف",
    type: "Meccan",
    total_verses: 206
  }
];
