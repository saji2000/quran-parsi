
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { chapters, getVerses, Verse } from "@/data/quranData";
import { useToast } from "@/hooks/use-toast";
import ChapterHeader from "@/components/quran/ChapterHeader";
import VerseCard from "@/components/quran/VerseCard";
import VerseControls from "@/components/quran/VerseControls";

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
        <ChapterHeader chapter={currentChapter} />
        
        <VerseControls
          chapter={currentChapter}
          activeVerse={activeVerse}
          showArabic={showArabic}
          showEnglish={showEnglish}
          onShowArabicChange={setShowArabic}
          onShowEnglishChange={setShowEnglish}
          onChapterChange={navigateToChapter}
          onVerseChange={navigateToVerse}
        />

        <div className="flex-1 p-6" ref={versesContainerRef}>
          {verses.map((verse) => (
            <VerseCard
              key={verse.id}
              verse={verse}
              chapterId={currentChapter.id}
              isActive={activeVerse === verse.verse_number}
              showArabic={showArabic}
              showEnglish={showEnglish}
              onVerseClick={navigateToVerse}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default QuranReader;
