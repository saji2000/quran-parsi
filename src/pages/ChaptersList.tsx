import { useState } from "react";
import { Link } from "react-router-dom";
import { chapters } from "@/data/quranData";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SearchIcon } from "lucide-react";

const ChaptersList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChapters = chapters.filter(
    (chapter) =>
      chapter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chapter.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chapter.id.toString().includes(searchTerm)
  );

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-azure-600 dark:text-azure-400">
          فهرست سوره‌های قرآن
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          سوره مورد نظر خود را انتخاب کنید
        </p>
      </div>

      <div className="relative max-w-lg mx-auto mb-8">
        <Input
          type="text"
          placeholder="جستجو سوره..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pr-10 text-right py-6"
          dir="rtl"
        />
        <SearchIcon className="absolute top-3 left-3 h-5 w-5 text-slate-400" />
      </div>

      <ScrollArea className="h-[60vh] rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
          {filteredChapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={`/quran/${chapter.id}`}
              className="flex items-center p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-azure-100 dark:bg-azure-900/30 text-azure-600 dark:text-azure-400 ml-3 flex-shrink-0">
                {chapter.id}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-bold">{chapter.name}</h3>
                  {/* <span className="text-xs text-slate-500 dark:text-slate-400">
                    {chapter.type === "Meccan" ? "مکی" : "مدنی"}
                  </span> */}
                </div>
                <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                  <p>{chapter.translation}</p>
                  <span className="text-xs">{chapter.total_verses} آیه</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChaptersList;
