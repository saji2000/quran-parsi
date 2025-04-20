import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-4">
      <div className="text-center max-w-md">
        <div className="mb-6 text-azure-500 dark:text-azure-400">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-16 h-16 mx-auto"
          >
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-azure-600 dark:text-azure-400 font-amiri">
          ۴۰۴
        </h1>
        
        <div className="mb-6 text-lg text-slate-700 dark:text-slate-300">
          <p className="mb-2 font-medium">صفحه مورد نظر یافت نشد</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            مسیری که به دنبال آن هستید در این برنامه وجود ندارد
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-azure-500 hover:bg-azure-600 text-white">
            <Link to="/">
              <Home className="ml-2 h-4 w-4" />
              بازگشت به خانه
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-azure-200 dark:border-azure-800/30">
            <Link to="/search">
              <Search className="ml-2 h-4 w-4" />
              جستجو در قرآن
            </Link>
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-slate-500 dark:text-slate-400 font-amiri">
          وَإِنَّكَ لَعَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ
        </p>
      </div>
    </div>
  );
};

export default NotFound;
