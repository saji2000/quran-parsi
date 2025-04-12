
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { chapters, getVerses, Verse } from "@/data/quranData";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

const QuranReader = () => {
  const { chapterId, verseId } = useParams<{ chapterId: string; verseId?: string }>();
  const [currentChapter, setCurrentChapter] = useState(chapters[0]);
  const [verses, setVerses] = useState<Verse[]>([]);
  const [activeVerse, setActiveVerse] = useState<number | null>(null);
  const versesContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Load chapter and verses
  useEffect(() => {
    if (chapterId) {
      const id = parseInt(chapterId, 10);
      const chapter = chapters.find(c => c.id === id);
      
      if (chapter) {
        setCurrentChapter(chapter);
        const chapterVerses = getVerses(id);
        setVerses(chapterVerses);
        
        // Set active verse if provided
        if (verseId) {
          setActiveVerse(parseInt(verseId, 10));
        } else {
          setActiveVerse(null);
        }
      } else {
        toast({
          title: "خطا",
          description: "سوره مورد نظر یافت نشد",
          variant: "destructive"
        });
        navigate("/quran");
      }
    }
  }, [chapterId, verseId, navigate, toast]);

  // Scroll to active verse
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

  // Handle chapter navigation
  const navigateToChapter = (id: number) => {
    if (id >= 1 && id <= chapters.length) {
      navigate(`/quran/${id}`);
    }
  };

  // Handle verse navigation
  const navigateToVerse = (verseNumber: number) => {
    if (verseNumber >= 1 && verseNumber <= currentChapter.total_verses) {
      navigate(`/quran/${currentChapter.id}/${verseNumber}`);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Card className="border border-gold-100 dark:border-gold-900/30 shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-gold-50 to-white dark:from-slate-800 dark:to-slate-900 p-6 text-center border-b border-gold-100 dark:border-gold-900/30">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gold-600 dark:text-gold-400">
            {currentChapter.name}
          </h1>
          <p className="text-sm mb-1 text-slate-500 dark:text-slate-400">
            {currentChapter.transliteration} • {currentChapter.translation}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {currentChapter.type === "Meccan" ? "مکی" : "مدنی"} • {currentChapter.total_verses} آیه
          </p>
        </div>
        
        <div className="p-4 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700/30">
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
            {activeVerse ? `آیه ${activeVerse} از ${currentChapter.total_verses}` : `${currentChapter.total_verses} آیه`}
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
        
        <ScrollArea className="h-[60vh]">
          <div className="p-6" ref={versesContainerRef}>
            {verses.map((verse) => (
              <div
                key={verse.id}
                id={`verse-${verse.verse_number}`}
                className={`my-4 p-2 transition-all duration-300 ${activeVerse === verse.verse_number ? 'active-verse' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
                onClick={() => navigateToVerse(verse.verse_number)}
              >
                <div className="verse-container">
                  <span className="verse-number">{verse.verse_number}</span>
                  <span className="quran-text">{verse.text}</span>
                </div>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-400 pr-5">
                  {verse.translation}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
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
