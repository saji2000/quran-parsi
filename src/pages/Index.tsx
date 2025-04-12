
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { findChapterAndVerse } from "@/data/quranData";
import { toast } from "@/hooks/use-toast";
import { SearchIcon, BookOpen } from "lucide-react";

const Home = () => {
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
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-gold-50 to-white dark:from-slate-900 dark:to-slate-800 py-20 px-4 md:py-32">
        <div className="container mx-auto text-center max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gold-600 dark:text-gold-400">
            نُور فارسی قرآن
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-700 dark:text-slate-300">
            با این برنامه قرآن کریم را به زبان فارسی بخوانید و در آن جستجو کنید
          </p>
          
          <form onSubmit={handleSearch} className="max-w-md mx-auto mb-8">
            <div className="relative flex items-center">
              <Input
                type="text"
                placeholder="جستجو سوره یا آیه (مثال: 4:13)"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="pr-10 text-right py-6 text-lg"
                dir="rtl"
              />
              <Button 
                type="submit" 
                size="icon" 
                variant="ghost" 
                className="absolute left-2"
              >
                <SearchIcon className="h-5 w-5" />
              </Button>
            </div>
          </form>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button 
              onClick={() => navigate("/quran")}
              className="bg-gold-500 hover:bg-gold-600 text-white"
              size="lg"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              مرور قرآن
            </Button>
            <Button
              onClick={() => navigate("/articles")}
              variant="outline"
              size="lg"
              className="border-gold-500 text-gold-600 hover:bg-gold-50 dark:border-gold-400 dark:text-gold-400 dark:hover:bg-gold-900/20"
            >
              مقالات و منابع
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg shadow-md bg-white dark:bg-slate-800 animate-fade-in" style={{animationDelay: "0.1s"}}>
            <div className="mb-4 bg-gold-100 dark:bg-gold-900/30 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
              <SearchIcon className="h-8 w-8 text-gold-600 dark:text-gold-400" />
            </div>
            <h2 className="text-xl font-bold mb-3">جستجوی آسان</h2>
            <p className="text-slate-600 dark:text-slate-300">به سادگی سوره و آیه مورد نظر خود را جستجو کنید</p>
          </div>
          
          <div className="text-center p-6 rounded-lg shadow-md bg-white dark:bg-slate-800 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="mb-4 bg-gold-100 dark:bg-gold-900/30 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-gold-600 dark:text-gold-400" />
            </div>
            <h2 className="text-xl font-bold mb-3">مطالعه راحت</h2>
            <p className="text-slate-600 dark:text-slate-300">با حالت روز و شب، قرآن را در هر زمانی مطالعه کنید</p>
          </div>
          
          <div className="text-center p-6 rounded-lg shadow-md bg-white dark:bg-slate-800 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="mb-4 bg-gold-100 dark:bg-gold-900/30 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8 text-gold-600 dark:text-gold-400">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">منابع آموزشی</h2>
            <p className="text-slate-600 dark:text-slate-300">به مجموعه مقالات و منابع آموزشی دسترسی داشته باشید</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
