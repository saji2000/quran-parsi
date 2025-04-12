
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 ml-2">
              <span className="font-bold text-xl text-primary">نور فارسی قرآن</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-1">
              <Link to="/">
                <Button variant="ghost">خانه</Button>
              </Link>
              <Link to="/quran">
                <Button variant="ghost">قرآن</Button>
              </Link>
              <Link to="/articles">
                <Button variant="ghost">مقالات</Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost">درباره ما</Button>
              </Link>
            </div>
            <Link to="/search">
              <Button variant="ghost" size="icon" className="ml-2">
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Link to="/search">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-60" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-2 pt-4 pb-3">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">خانه</Button>
            </Link>
            <Link to="/quran" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">قرآن</Button>
            </Link>
            <Link to="/articles" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">مقالات</Button>
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">درباره ما</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
