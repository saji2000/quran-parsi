import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { chapters, getVerses, Verse } from "@/data/quranData";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ToggleGroup } from "@/components/ui/toggle-group";

const QuranReader = () => {
  const { chapterId, verseId } = useParams<{
    chapterId: string;
    verseId?: string;
  }>();
  const [currentChapter, setCurrentChapter] = useState(chapters[0]);
  const [verses, setVerses] = useState<Verse[]>([]);
  const [activeVerse, setActiveVerse] = useState<number | null>(null);
  const [showArabic, setShowArabic] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);
  const versesContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (chapterId) {
      const id = parseInt(chapterId, 10);
      const chapter = chapters.find((c) => c.id === id);

      if (chapter) {
        setCurrentChapter(chapter);
        const chapterVerses = getVerses(id);
        setVerses(chapterVerses);

        if (verseId) {
          setActiveVerse(parseInt(verseId, 10));
        } else {
          setActiveVerse(null);
        }
      } else {
        toast({
          title: "خطا",
          description: "سوره مورد نظر یافت نشد",
          variant: "destructive",
        });
        navigate("/quran");
      }
    }
  }, [chapterId, verseId, navigate, toast]);

  useEffect(() => {
    if (activeVerse && versesContainerRef.current) {
      const verseElement = document.getElementById(`verse-${activeVerse}`);
      if (verseElement) {
        setTimeout(() => {
          verseElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      }
    }
  }, [activeVerse, verses]);

  const navigateToChapter = (id: number) => {
    if (id >= 1 && id <= chapters.length) {
      navigate(`/quran/${id}`);
    }
  };

  const navigateToVerse = (verseNumber: number) => {
    if (verseNumber >= 1 && verseNumber <= currentChapter.total_verses) {
      navigate(`/quran/${currentChapter.id}/${verseNumber}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      <Card className="flex-1 flex flex-col border-0 shadow-none bg-transparent">
        <div className="bg-gradient-to-r from-gold-50 to-white dark:from-slate-800 dark:to-slate-900 p-6 text-center border-b border-gold-100 dark:border-gold-900/30">
          <div className="flex justify-center items-center mb-3">
            <span className="text-xl font-bold text-gold-600 dark:text-gold-400">
              سوره {currentChapter.id}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gold-600 dark:text-gold-400">
            {currentChapter.name}
          </h1>
          {currentChapter.translation && (
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-1">
              {currentChapter.translation}
            </p>
          )}
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {currentChapter.total_verses} آیه
          </p>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700/30">
          <div className="flex items-center justify-between mb-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateToChapter(currentChapter.id - 1)}
              disabled={currentChapter.id <= 1}
              className="flex items-center"
            >
              <ChevronRight className="h-4 w-4 ml-1" />
              سوره قبلی
            </Button>

            <div className="text-sm font-medium">
              {activeVerse
                ? `آیه ${activeVerse} از ${currentChapter.total_verses}`
                : `${currentChapter.total_verses} آیه`}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateToChapter(currentChapter.id + 1)}
              disabled={currentChapter.id >= chapters.length}
              className="flex items-center"
            >
              سوره بعدی
              <ChevronLeft className="h-4 w-4 mr-1" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <ToggleGroup
              type="multiple"
              variant="outline"
              className="justify-center"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-white dark:bg-slate-800 shadow-sm">
                <Eye
                  className={`h-5 w-5 ${
                    showArabic ? "text-gold-500" : "text-slate-400"
                  }`}
                />
                <Label htmlFor="show-arabic" className="cursor-pointer">
                  متن عربی
                </Label>
                <Switch
                  id="show-arabic"
                  checked={showArabic}
                  onCheckedChange={setShowArabic}
                  className="ml-2 data-[state=checked]:bg-gold-500"
                />
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-white dark:bg-slate-800 shadow-sm">
                <Eye
                  className={`h-5 w-5 ${
                    showEnglish ? "text-gold-500" : "text-slate-400"
                  }`}
                />
                <Label htmlFor="show-english" className="cursor-pointer">
                  متن انگلیسی
                </Label>
                <Switch
                  id="show-english"
                  checked={showEnglish}
                  onCheckedChange={setShowEnglish}
                  className="ml-2 data-[state=checked]:bg-gold-500"
                />
              </div>
            </ToggleGroup>
          </div>
        </div>

        <div className="flex-1 p-6" ref={versesContainerRef}>
          {verses.map((verse) => (
            <div
              key={verse.id}
              id={`verse-${verse.verse_number}`}
              className={`my-4 p-2 transition-all duration-300 ${
                activeVerse === verse.verse_number
                  ? "bg-gold-50 dark:bg-gold-900/10 rounded-lg"
                  : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
              onClick={() => navigateToVerse(verse.verse_number)}
            >
              {verse.subtitle && (
                <div className="text-sm font-medium text-gold-600 dark:text-gold-400 mb-2">
                  {verse.subtitle}
                </div>
              )}
              <div className="flex flex-col items-end">
                <div className="flex items-center justify-end mb-2 text-gold-600 dark:text-gold-400">
                  <span className="inline-flex items-center justify-center rounded-md bg-gold-100 dark:bg-gold-900/30 px-2 py-1 text-sm">
                    {currentChapter.id}:{verse.verse_number}
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
                  <div className="w-full text-right text-sm text-slate-500 dark:text-slate-500 ltr:text-left rtl:text-right">
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
          ))}
        </div>

        {activeVerse && (
          <div className="p-4 border-t border-slate-200 dark:border-slate-700/30 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateToVerse(activeVerse - 1)}
              disabled={activeVerse <= 1}
              className="border-gold-200 dark:border-gold-900/30"
            >
              <ChevronRight className="h-4 w-4 ml-1" />
              آیه قبلی
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateToVerse(activeVerse + 1)}
              disabled={activeVerse >= currentChapter.total_verses}
              className="border-gold-200 dark:border-gold-900/30"
            >
              آیه بعدی
              <ChevronLeft className="h-4 w-4 mr-1" />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default QuranReader;
