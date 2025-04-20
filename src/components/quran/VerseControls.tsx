
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Chapter } from "@/data/quranData";

interface VerseControlsProps {
  chapter: Chapter;
  activeVerse: number | null;
  showArabic: boolean;
  showEnglish: boolean;
  onShowArabicChange: (value: boolean) => void;
  onShowEnglishChange: (value: boolean) => void;
  onChapterChange: (id: number) => void;
  onVerseChange: (verseNumber: number) => void;
}

const VerseControls = ({
  chapter,
  activeVerse,
  showArabic,
  showEnglish,
  onShowArabicChange,
  onShowEnglishChange,
  onChapterChange,
  onVerseChange,
}: VerseControlsProps) => {
  return (
    <>
      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700/30">
        <div className="flex items-center justify-between mb-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onChapterChange(chapter.id - 1)}
            disabled={chapter.id <= 1}
            className="flex items-center"
          >
            <ChevronRight className="h-4 w-4 ml-1" />
            سوره قبلی
          </Button>

          <div className="text-sm font-medium">
            {activeVerse
              ? `آیه ${activeVerse} از ${chapter.total_verses}`
              : `${chapter.total_verses} آیه`}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => onChapterChange(chapter.id + 1)}
            disabled={chapter.id >= 114}
            className="flex items-center"
          >
            سوره بعدی
            <ChevronLeft className="h-4 w-4 mr-1" />
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <ToggleGroup type="multiple" variant="outline" className="justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-white dark:bg-slate-800 shadow-sm">
              <Eye
                className={`h-5 w-5 ${
                  showArabic ? "text-azure-500" : "text-slate-400"
                }`}
              />
              <Label htmlFor="show-arabic" className="cursor-pointer">
                متن عربی
              </Label>
              <Switch
                id="show-arabic"
                checked={showArabic}
                onCheckedChange={onShowArabicChange}
                className="ml-2 data-[state=checked]:bg-azure-500"
              />
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-white dark:bg-slate-800 shadow-sm">
              <Eye
                className={`h-5 w-5 ${
                  showEnglish ? "text-azure-500" : "text-slate-400"
                }`}
              />
              <Label htmlFor="show-english" className="cursor-pointer">
                متن انگلیسی
              </Label>
              <Switch
                id="show-english"
                checked={showEnglish}
                onCheckedChange={onShowEnglishChange}
                className="ml-2 data-[state=checked]:bg-azure-500"
              />
            </div>
          </ToggleGroup>
        </div>
      </div>

      {activeVerse && (
        <div className="p-4 border-t border-slate-200 dark:border-slate-700/30 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onVerseChange(activeVerse - 1)}
            disabled={activeVerse <= 1}
            className="border-azure-200 dark:border-azure-900/30"
          >
            <ChevronRight className="h-4 w-4 ml-1" />
            آیه قبلی
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onVerseChange(activeVerse + 1)}
            disabled={activeVerse >= chapter.total_verses}
            className="border-azure-200 dark:border-azure-900/30"
          >
            آیه بعدی
            <ChevronLeft className="h-4 w-4 mr-1" />
          </Button>
        </div>
      )}
    </>
  );
};

export default VerseControls;
