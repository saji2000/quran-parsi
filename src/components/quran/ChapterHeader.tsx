
import { Chapter } from "@/data/quranData";

interface ChapterHeaderProps {
  chapter: Chapter;
}

const ChapterHeader = ({ chapter }: ChapterHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-azure-50 to-white dark:from-slate-800 dark:to-slate-900 p-6 text-center border-b border-azure-100 dark:border-azure-900/30">
      <div className="flex justify-center items-center mb-3">
        <span className="text-xl font-bold text-azure-600 dark:text-azure-400">
          سوره {chapter.id}
        </span>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-azure-600 dark:text-azure-400">
        {chapter.name}
      </h1>
      {chapter.translation && (
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-1">
          {chapter.translation}
        </p>
      )}
      <p className="text-xs text-slate-500 dark:text-slate-400">
        {chapter.total_verses} آیه
      </p>
    </div>
  );
};

export default ChapterHeader;
