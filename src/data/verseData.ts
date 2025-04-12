
import { Verse } from "@/types/quran";

// Verse data for chapter 1
const chapter1Verses: Verse[] = [
  {
    id: 1,
    text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    translation: "به نام خداوند بخشنده مهربان",
    english_text: "In the name of God, Most Gracious, Most Merciful",
    chapter_id: 1,
    verse_number: 1
  },
  {
    id: 2,
    text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    translation: "ستایش مخصوص خداوندی است که پروردگار جهانیان است",
    english_text: "Praise be to God, Lord of the worlds",
    chapter_id: 1,
    verse_number: 2
  },
  {
    id: 3,
    text: "الرَّحْمَٰنِ الرَّحِيمِ",
    translation: "بخشنده مهربان",
    english_text: "The Most Gracious, Most Merciful",
    chapter_id: 1,
    verse_number: 3
  },
  {
    id: 4,
    text: "مَالِكِ يَوْمِ الدِّينِ",
    translation: "صاحب روز جزا",
    english_text: "Master of the Day of Judgment",
    chapter_id: 1,
    verse_number: 4
  },
  {
    id: 5,
    text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    translation: "(پروردگارا) تنها تو را می‌پرستیم و تنها از تو یاری می‌جوییم",
    english_text: "You alone we worship, and You alone we ask for help",
    chapter_id: 1,
    verse_number: 5
  },
  {
    id: 6,
    text: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    translation: "ما را به راه راست هدایت فرما",
    english_text: "Guide us to the straight path",
    chapter_id: 1,
    verse_number: 6
  },
  {
    id: 7,
    text: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    translation: "راه کسانى که به آنها نعمت داده اى؛ نه آنان که سزاوار خشم شدەاند و نه گمراهان.",
    english_text: "The path of those You have blessed, not of those who have earned Your anger, nor of those who have gone astray",
    chapter_id: 1,
    verse_number: 7,
    footnote: "*1:1-7 Sura 1 is God's gift to us to establish contact with Him through the daily Contact Prayers. This fact is supported by an earth-shattering, simple-to-understand-but-impossible-to-imitate mathematical composition that challenges the greatest mathematicians on earth, and stumps them; it is far beyond human capabilities:\n\n(1) The sura number, followed by the numbers of verses, next to each other, give 1 1 2 3 4 5 6 7. This number is a multiple of 19.\n\n(2) If we substitute the number of letters per verse in place of verse numbers, we get 1 19 17 12 11 19 18 43. This number is also a multiple of 19.\n\n(3) If we insert the total gematrical value of every verse, we get 1 19 786 17 581 12 618 11 241 19 836 18 1072 43 6009. This number is a multiple of 19.\n\n(4) The number shown above includes all parameters of Sura 1, and consists of 38 digits (19x2).\n\n(5) It is noteworthy that this 38-digit number is still divisible by 19 when we write its components backwards, from right to left as practiced by the Arabs. Thus, 6009 43 1072 18 836 19 241 11 618 12 581 17 786 19 1 is also a multiple of 19.\n\n(6) The mathematical representations mentioned above participate in numerous extraordinary mathematical phenomena to confirm all details of the five daily Contact Prayers (Appendix 15).\n\n(7) Many more astounding phenomena are given in Appendix One. Thus, the reader is handed at the outset tangible proof that this is God's message to the world."
  }
];

// Verse data for chapter 2
const chapter2Verses: Verse[] = [
  {
    id: 8,
    text: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    translation: "به نام خدا، بخشنده ترين، مهربان ترين.",
    english_text: "In the name of God, Most Gracious, Most Merciful",
    chapter_id: 2,
    verse_number: 0,
    subtitle: "",
    footnote: ""
  },
  {
    id: 9,
    text: "الٓمٓ",
    translation: "ا. ل. م.*",
    english_text: "A.L.M.",
    chapter_id: 2,
    verse_number: 1,
    footnote: "*2:1 These initials remained a divinely guarded secret for 1400 years. Now we recognize them as a major component of the Quran's mathematical miracle (see Appendices 1, 2, 24, and 26). The meaning of A.L.M. is pointed out in Verse 2: \"This scripture is infallible.\" This is incontrovertibly proven by the fact that the frequencies of occurrence of these three initials in this sura are 4502, 3202, and 2195, respectively. The sum of these numbers is 9899, or 19x521. Thus, these most frequent letters of the Arabic language are mathematically placed according to a super-human pattern. These same initials also prefix Suras 3, 29, 30, 31, and 32, and their frequencies of occurrence add up to multiples of 19 in each one of these suras."
  },
  {
    id: 10,
    text: "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ",
    translation: "اين کتاب آسمانى اشتباه ناپذير است؛ رهنمودى براى پرهيزكاران؛",
    english_text: "This scripture is infallible; a beacon for the righteous",
    chapter_id: 2,
    verse_number: 2
  },
  {
    id: 11,
    text: "ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ",
    translation: "کسانى که به غيب ايمان دارند و نمازها (ارتباط با خدا)* را به جا می آورند و از آنچه به آنها روزى مى دهيم،** انفاق مى کنند.",
    english_text: "who believe in the unseen, observe the Contact Prayers (Salat), and from our provisions to them, they give to charity",
    chapter_id: 2,
    verse_number: 3,
    subtitle: "Three Categories of People (1) The Righteous",
    footnote: "*2:3 Since the Contact Prayers are decreed five times a day, they constitute the prime source of nourishment for our souls. Along with all other practices in Submission, the Contact Prayers were originally revealed through Abraham (21:73, 22:78). Although these five daily prayers were practiced before the revelation of the Quran, each Contact Prayer is specifically mentioned in the Quran (24:58, 11:114, 17:78, & 2:238). Appendices 1 & 15 provide physical evidence supporting all the details of the Contact Prayers, including the number of units (Rak'aas) and the numbers of bowings, prostrations, and Tashahhuds in each prayer.\n\n**2:3 When God uses the plural tense, this indicates that other entities, usually the angels, are involved. When God spoke to Moses, the singular form was used (20:12- 14). See Appendix 10."
  },
  {
    id: 12,
    text: "وَٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِٱلْءَاخِرَةِ هُمْ يُوقِنُونَ",
    translation: "و کسانى که به آنچه بر تو نازل شده و آنچه پيش از تو نازل شده، ايمان دارند و به آخرت يقين دارند.",
    english_text: "And they believe in what was revealed to you, and in what was revealed before you, and with regard to the Hereafter, they are absolutely certain",
    chapter_id: 2,
    verse_number: 4
  }
];

// Sample verses data for chapter 4
const chapter4Verses: Verse[] = Array.from({ length: 12 }, (_, i) => ({
  id: 300 + i,
  text: `نص آیه ${i + 1} از سوره نساء`,
  translation: `ترجمه آیه ${i + 1} از سوره نساء`,
  english_text: `English translation of verse ${i + 1} from Sura An-Nisa`,
  chapter_id: 4,
  verse_number: i + 1
}));

// Add the special verse 13
chapter4Verses.push({
  id: 313,
  text: "تِلْكَ حُدُودُ اللَّهِ ۚ وَمَن يُطِعِ اللَّهَ وَرَسُولَهُ يُدْخِلْهُ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا ۚ وَذَٰلِكَ الْفَوْزُ الْعَظِيمُ",
  translation: "این‌ها حدود الهی است و هر کس از خدا و پیامبرش اطاعت کند، او را در باغ‌هایی وارد می‌کند که نهرها از زیر آن جاری است، جاودانه در آن می‌مانند و این همان کامیابی بزرگ است",
  english_text: "These are God's laws. Those who obey God and His messenger, He will admit them into gardens with flowing streams, wherein they abide forever. This is the greatest triumph.",
  chapter_id: 4,
  verse_number: 13
});

// Add more verses
for (let i = 13; i < 20; i++) {
  chapter4Verses.push({
    id: 300 + i,
    text: `نص آیه ${i + 1} از سوره نساء`,
    translation: `ترجمه آیه ${i + 1} از سوره نساء`,
    english_text: `English translation of verse ${i + 1} from Sura An-Nisa`,
    chapter_id: 4,
    verse_number: i + 1
  });
}

// Organize verses by chapter for easy access
export const versesByChapter = {
  1: chapter1Verses,
  2: chapter2Verses,
  4: chapter4Verses
};
