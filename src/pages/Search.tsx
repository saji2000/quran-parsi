import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { findChapterAndVerse } from "@/data/quranData";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchInput.trim()) {
      toast({
        title: "جستجوی خالی",
        description: "لطفا شماره سوره یا سوره:آیه را وارد کنید",
        variant: "destructive",
      });
      return;
    }
    
    const result = findChapterAndVerse(searchInput);
    
    if (!result) {
      toast({
        title: "خطا در جستجو",
        description: "لطفا یک سوره و آیه معتبر وارد کنید (مثلا: 4:13)",
        variant: "destructive",
      });
      return;
    }
    
    const { chapterId, verseNumber } = result;
    if (verseNumber) {
      navigate(`/quran/${chapterId}/${verseNumber}`);
    } else {
      navigate(`/quran/${chapterId}`);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-2xl">
      <Card className="border border-azure-100 dark:border-slate-700">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-azure-600 dark:text-azure-400">
            جستجو در قرآن
          </CardTitle>
          <CardDescription>
            شماره سوره یا سوره:آیه را وارد کنید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="مثال: 4:13 یا 1"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="pr-10 text-right py-6 text-lg"
                dir="rtl"
              />
              <SearchIcon className="absolute top-4 left-3 h-5 w-5 text-slate-400" />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-azure-500 hover:bg-azure-600 text-white"
            >
              جستجو
            </Button>
          </form>
          
          <div className="mt-8 text-center border-t border-slate-200 dark:border-slate-700 pt-6">
            <h3 className="font-medium mb-3">نمونه‌های جستجو:</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {["1", "2:255", "4:13", "36", "112"].map((example) => (
                <Button
                  key={example}
                  variant="outline"
                  size="sm"
                  className="text-azure-600 dark:text-azure-400 border-azure-200 dark:border-azure-800/30"
                  onClick={() => {
                    setSearchInput(example);
                    const result = findChapterAndVerse(example);
                    if (result) {
                      const { chapterId, verseNumber } = result;
                      if (verseNumber) {
                        navigate(`/quran/${chapterId}/${verseNumber}`);
                      } else {
                        navigate(`/quran/${chapterId}`);
                      }
                    }
                  }}
                >
                  {example}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-sm text-slate-500 dark:text-slate-400 text-center">
            <p>شما می‌توانید با الگوی "شماره سوره:شماره آیه" جستجو کنید</p>
            <p>مثال: 2:255 برای آیة الکرسی</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Search;
