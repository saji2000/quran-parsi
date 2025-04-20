
import { Verse } from "@/data/quranData";

interface VerseCardProps {
  verse: Verse;
  chapterId: number;
  isActive: boolean;
  showArabic: boolean;
  showEnglish: boolean;
  onVerseClick: (verseNumber: number) => void;
}

const VerseCard = ({
  verse,
  chapterId,
  isActive,
  showArabic,
  showEnglish,
  onVerseClick,
}: VerseCardProps) => {
  return (
    <div
      id={`verse-${verse.verse_number}`}
      className={`my-4 p-2 transition-all duration-300 ${
        isActive
          ? "bg-azure-50 dark:bg-azure-900/10 rounded-lg"
          : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
      }`}
      onClick={() => onVerseClick(verse.verse_number)}
    >
      <div className="flex flex-col items-end">
        <div className="flex items-center justify-end mb-2 text-azure-600 dark:text-azure-400">
          <span className="inline-flex items-center justify-center rounded-md bg-azure-100 dark:bg-azure-900/30 px-2 py-1 text-sm">
            {chapterId}:{verse.verse_number}
          </span>
        </div>

        <div className="text-xl font-medium text-slate-800 dark:text-slate-300 text-right w-full mb-3">
          {verse.translation}
        </div>

        {showArabic && (
          <div className="verse-container w-full mb-2 text-right">
            <span className="quran-text text-lg leading-loose font-amiri">
              {verse.text}
            </span>
          </div>
        )}

        {showEnglish && verse.english_text && (
          <div className="w-full text-right text-base md:text-lg text-slate-500 dark:text-slate-500 ltr:text-left rtl:text-right">
            {verse.english_text}
          </div>
        )}

        {verse.footnote && (
          <div className="mt-3 text-xs text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-md w-full">
            {verse.footnote}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerseCard;
