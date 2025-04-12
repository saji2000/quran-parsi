
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/Navbar";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChaptersList from "./pages/ChaptersList";
import QuranReader from "./pages/QuranReader";
import Search from "./pages/Search";
import Articles from "./pages/Articles";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quran" element={<ChaptersList />} />
            <Route path="/quran/:chapterId" element={<QuranReader />} />
            <Route path="/quran/:chapterId/:verseId" element={<QuranReader />} />
            <Route path="/search" element={<Search />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
