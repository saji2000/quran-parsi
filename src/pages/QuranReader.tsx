
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";
import { chapters, getVerses, Verse } from "@/data/quranData";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const QuranReader = () => {
  const { chapterId, verseId } = useParams<{ chapterId: string; verseId?: string }>();
  const [currentChapter, setCurrentChapter] = useState(chapters[0]);
  const [verses, setVerses] = useState<Verse[]>([]);
  const [activeVerse, setActiveVerse] = useState<number | null>(null);
  const [showArabic, setShowArabic] = useState(true);
  const [showEnglish, setShowEnglish] = useState(true);
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
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Switch 
                id="show-arabic" 
                checked={showArabic} 
                onCheckedChange={setShowArabic} 
              />
              <Label htmlFor="show-arabic" className="text-sm">متن عربی</Label>
              {showArabic ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </div>
            
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Switch 
                id="show-english" 
                checked={showEnglish} 
                onCheckedChange={setShowEnglish} 
              />
              <Label htmlFor="show-english" className="text-sm">متن انگلیسی</Label>
              {showEnglish ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </div>
          </div>
        </div>
        
        <ScrollArea className="h-[60vh]">
          <div className="p-6" ref={versesContainerRef}>
            {verses.map((verse) => (
              <div
                key={verse.id}
                id={`verse-${verse.verse_number}`}
                className={`my-4 p-2 transition-all duration-300 ${activeVerse === verse.verse_number ? 'bg-gold-50 dark:bg-gold-900/10 rounded-lg' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
                onClick={() => navigateToVerse(verse.verse_number)}
              >
                {verse.subtitle && (
                  <div className="text-sm font-medium text-gold-600 dark:text-gold-400 mb-2">
                    {verse.subtitle}
                  </div>
                )}
                <div className="verse-container">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-600 dark:text-gold-400 text-xs ml-3">
                    {verse.verse_number}
                  </span>
                  {showArabic && (
                    <span className="quran-text text-lg leading-loose">{verse.text}</span>
                  )}
                </div>
                <div className="mt-2 text-xl font-medium text-slate-800 dark:text-slate-300 pr-8">
                  {verse.translation}
                </div>
                {showEnglish && verse.english_text && (
                  <div className="mt-1 text-sm text-slate-500 dark:text-slate-500 pr-8 italic">
                    {verse.english_text}
                  </div>
                )}
                {verse.footnote && (
                  <div className="mt-3 text-xs text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-md">
                    {verse.footnote}
                  </div>
                )}
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
