
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
  chapter_id: number;
  verse_number: number;
}

// Sample chapters data (just a few for demo purposes)
export const chapters: Chapter[] = [
  {
    id: 1,
    name: "الفاتحة",
    transliteration: "Al-Fatihah",
    translation: "سوره فاتحه",
    type: "Meccan",
    total_verses: 7
  },
  {
    id: 2,
    name: "البقرة",
    transliteration: "Al-Baqarah",
    translation: "سوره بقره",
    type: "Medinan",
    total_verses: 286
  },
  {
    id: 3,
    name: "آل عمران",
    transliteration: "Aal-Imran",
    translation: "سوره آل عمران",
    type: "Medinan",
    total_verses: 200
  },
  {
    id: 4,
    name: "النساء",
    transliteration: "An-Nisa",
    translation: "سوره نساء",
    type: "Medinan",
    total_verses: 176
  },
  {
    id: 5,
    name: "المائدة",
    transliteration: "Al-Ma'idah",
    translation: "سوره مائده",
    type: "Medinan",
    total_verses: 120
  },
  {
    id: 6,
    name: "الأنعام",
    transliteration: "Al-An'am",
    translation: "سوره انعام",
    type: "Meccan",
    total_verses: 165
  },
  {
    id: 7,
    name: "الأعراف",
    transliteration: "Al-A'raf",
    translation: "سوره اعراف",
    type: "Meccan",
    total_verses: 206
  }
];

// Sample verses data (just a few for demo purposes)
export const getVerses = (chapterId: number): Verse[] => {
  // This is just sample data
  if (chapterId === 1) {
    return [
      {
        id: 1,
        text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        translation: "به نام خداوند بخشنده مهربان",
        chapter_id: 1,
        verse_number: 1
      },
      {
        id: 2,
        text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        translation: "ستایش مخصوص خداوندی است که پروردگار جهانیان است",
        chapter_id: 1,
        verse_number: 2
      },
      {
        id: 3,
        text: "الرَّحْمَٰنِ الرَّحِيمِ",
        translation: "بخشنده مهربان",
        chapter_id: 1,
        verse_number: 3
      },
      {
        id: 4,
        text: "مَالِكِ يَوْمِ الدِّينِ",
        translation: "صاحب روز جزا",
        chapter_id: 1,
        verse_number: 4
      },
      {
        id: 5,
        text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        translation: "(پروردگارا) تنها تو را می‌پرستیم و تنها از تو یاری می‌جوییم",
        chapter_id: 1,
        verse_number: 5
      },
      {
        id: 6,
        text: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        translation: "ما را به راه راست هدایت فرما",
        chapter_id: 1,
        verse_number: 6
      },
      {
        id: 7,
        text: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        translation: "راه کسانی که به آنان نعمت داده‌ای، نه راه غضب شدگان و نه گمراهان",
        chapter_id: 1,
        verse_number: 7
      }
    ];
  } else if (chapterId === 2) {
    // Return a few verses from Al-Baqarah as example
    return [
      {
        id: 8,
        text: "الم",
        translation: "الف، لام، میم",
        chapter_id: 2,
        verse_number: 1
      },
      {
        id: 9,
        text: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
        translation: "این است کتابى که در آن تردیدى نیست [و] مایه هدایت تقواپیشگان است",
        chapter_id: 2,
        verse_number: 2
      },
      {
        id: 10,
        text: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
        translation: "آنان که به غیب ایمان می‌آورند و نماز را برپا می‌دارند و از آنچه به ایشان روزى داده‌ایم انفاق می‌کنند",
        chapter_id: 2,
        verse_number: 3
      },
      {
        id: 11,
        text: "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ",
        translation: "و آنان که به آنچه به سوى تو فرود آمده و به آنچه پیش از تو نازل شده ایمان می‌آورند و به آخرت یقین دارند",
        chapter_id: 2,
        verse_number: 4
      },
      {
        id: 12,
        text: "أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
        translation: "آنان بر [طریق] هدایتى از پروردگار خویشند و آنان همان رستگارانند",
        chapter_id: 2,
        verse_number: 5
      }
    ];
  } else if (chapterId === 4) {
    // Return verses from An-Nisa chapter for the specific example requested by user (4:13)
    const verses: Verse[] = Array.from({ length: 20 }, (_, i) => {
      // First 12 verses with basic content
      if (i < 12) {
        return {
          id: 300 + i,
          text: `نص آیه ${i + 1} از سوره نساء`,
          translation: `ترجمه آیه ${i + 1} از سوره نساء`,
          chapter_id: 4,
          verse_number: i + 1
        };
      }
      
      // Special verse 13 (the one mentioned in the requirements)
      if (i === 12) {
        return {
          id: 313,
          text: "تِلْكَ حُدُودُ اللَّهِ ۚ وَمَن يُطِعِ اللَّهَ وَرَسُولَهُ يُدْخِلْهُ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا ۚ وَذَٰلِكَ الْفَوْزُ الْعَظِيمُ",
          translation: "این‌ها حدود الهی است و هر کس از خدا و پیامبرش اطاعت کند، او را در باغ‌هایی وارد می‌کند که نهرها از زیر آن جاری است، جاودانه در آن می‌مانند و این همان کامیابی بزرگ است",
          chapter_id: 4,
          verse_number: 13
        };
      }
      
      // Remaining verses
      return {
        id: 300 + i,
        text: `نص آیه ${i + 1} از سوره نساء`,
        translation: `ترجمه آیه ${i + 1} از سوره نساء`,
        chapter_id: 4,
        verse_number: i + 1
      };
    });
    
    return verses;
  }
  
  // For other chapters, return limited sample verses
  return Array.from({ length: 5 }, (_, i) => ({
    id: (chapterId * 100) + i,
    text: `نص آیه ${i + 1} من السورة ${chapterId}`,
    translation: `ترجمه آیه ${i + 1} از سوره ${chapterId}`,
    chapter_id: chapterId,
    verse_number: i + 1
  }));
};

// Function to search for a specific chapter/verse
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
    const chapter = chapters.find(c => c.id === chapterId);
    if (!chapter || isNaN(verseNumber) || verseNumber < 1 || verseNumber > chapter.total_verses) {
      return null;
    }
  }
  
  return { chapterId, verseNumber };
};
