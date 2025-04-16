
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  FileText, 
  Download, 
  Search, 
  Youtube, 
  Headphones, 
  FileDown,
  BookMarked
} from "lucide-react";
import { Input } from "@/components/ui/input";

// Sample article data
const articles = [
  {
    id: 1,
    title: "تاریخچه قرآن",
    description: "تاریخ نزول و جمع‌آوری قرآن کریم",
    category: "articles",
    author: "دکتر محمدی",
    date: "۱۴۰۲/۰۱/۱۵",
    thumbnail: "https://images.unsplash.com/photo-1609599006475-a7745c96b6bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cXVyYW58ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    title: "تفسیر سوره فاتحه",
    description: "مطالعه عمیق در معانی و مفاهیم سوره فاتحه",
    category: "articles",
    author: "استاد رضایی",
    date: "۱۴۰۲/۰۲/۰۵",
    thumbnail: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVyYW58ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    title: "آموزش تجوید قرآن",
    description: "آشنایی با اصول و قواعد تجوید برای قرائت صحیح قرآن",
    category: "pdf",
    author: "استاد احمدی",
    date: "۱۴۰۱/۱۱/۲۷",
    fileSize: "۲.۵ مگابایت"
  },
  {
    id: 4,
    title: "واژه‌نامه قرآنی",
    description: "فرهنگ لغات و اصطلاحات کاربردی در قرآن کریم",
    category: "pdf",
    author: "دکتر حسینی",
    date: "۱۴۰۱/۱۰/۰۸",
    fileSize: "۴.۲ مگابایت"
  },
  {
    id: 5,
    title: "معارف قرآنی",
    description: "آشنایی با مباحث معرفتی قرآن کریم",
    category: "articles",
    author: "دکتر علوی",
    date: "۱۴۰۲/۰۳/۱۸",
    thumbnail: "https://images.unsplash.com/photo-1602029908656-9ce8ba10a177?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cXVyYW58ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 6,
    title: "آشنایی با علوم قرآنی",
    description: "مقدمه‌ای بر علوم مرتبط با قرآن کریم",
    category: "pdf",
    author: "دکتر موسوی",
    date: "۱۴۰۲/۰۴/۲۲",
    fileSize: "۳.۱ مگابایت"
  }
];

// Sample messenger materials data
const messengerMaterials = {
  appendices: [
    {
      id: 1,
      title: "پیوست ۱: معجزه عدد ۱۹",
      description: "توضیحات مفصل درباره معجزه عدد ۱۹ در قرآن کریم",
      author: "دکتر رشاد خلیفه",
      date: "۱۴۰۲/۰۱/۱۵",
      fileSize: "۳.۲ مگابایت"
    },
    {
      id: 2,
      title: "پیوست ۲: اسامی خداوند در قرآن",
      description: "بررسی اسامی خداوند در قرآن کریم",
      author: "دکتر رشاد خلیفه",
      date: "۱۴۰۲/۰۱/۲۰",
      fileSize: "۲.۵ مگابایت"
    }
  ],
  submitters: [
    {
      id: 1,
      title: "دیدگاه‌های تسلیم‌شدگان: ایمان و عمل",
      description: "دیدگاه‌های تسلیم‌شدگان درباره ایمان و عمل در اسلام",
      author: "انجمن تسلیم‌شدگان",
      date: "۱۴۰۲/۰۲/۱۰",
      fileSize: "۴.۱ مگابایت"
    },
    {
      id: 2,
      title: "دیدگاه‌های تسلیم‌شدگان: نماز",
      description: "راهنمای عملی برای نماز بر اساس قرآن",
      author: "انجمن تسلیم‌شدگان",
      date: "۱۴۰۲/۰۲/۱۵",
      fileSize: "۳.۰ مگابایت"
    }
  ],
  videos: [
    {
      id: 1,
      title: "معجزه ریاضی قرآن",
      description: "توضیح ویدیویی درباره معجزه ریاضی قرآن",
      author: "دکتر رشاد خلیفه",
      duration: "۴۵ دقیقه",
      youtubeLink: "https://www.youtube.com/watch?v=example1"
    },
    {
      id: 2,
      title: "تفسیر سوره اخلاص",
      description: "تفسیر جامع سوره اخلاص",
      author: "استاد احمدی",
      duration: "۳۰ دقیقه",
      youtubeLink: "https://www.youtube.com/watch?v=example2"
    }
  ],
  audios: [
    {
      id: 1,
      title: "تلاوت قرآن با ترجمه فارسی",
      description: "تلاوت سوره های منتخب با ترجمه فارسی",
      author: "استاد منصوری",
      duration: "۱ ساعت و ۲۰ دقیقه",
      youtubeLink: "https://www.youtube.com/watch?v=example3"
    },
    {
      id: 2,
      title: "سخنرانی: قرآن کافی است",
      description: "بررسی کفایت قرآن برای هدایت انسان",
      author: "دکتر موسوی",
      duration: "۵۵ دقیقه",
      youtubeLink: "https://www.youtube.com/watch?v=example4"
    }
  ]
};

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  // Filter articles based on search and active tab
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === "all" || article.category === activeTab;
    
    return matchesSearch && matchesTab;
  });

  // Filter messenger materials based on search
  const filterMaterials = (materials: any[]) => {
    if (!searchTerm) return materials;
    
    return materials.filter(material => 
      material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (material.author && material.author.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gold-600 dark:text-gold-400">
          مقالات و منابع
        </h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          مجموعه‌ای از مقالات و منابع آموزشی در مورد قرآن کریم
        </p>
      </div>
      
      <div className="relative max-w-lg mx-auto mb-8">
        <Input
          type="text"
          placeholder="جستجو در مقالات و منابع..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pr-10 text-right py-6"
          dir="rtl"
        />
        <Search className="absolute top-3 left-3 h-5 w-5 text-slate-400" />
      </div>
      
      <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5 md:w-auto md:inline-flex">
          <TabsTrigger value="all">همه</TabsTrigger>
          <TabsTrigger value="articles">مقالات</TabsTrigger>
          <TabsTrigger value="pdf">فایل‌های PDF</TabsTrigger>
          <TabsTrigger value="messenger">منابع رسول</TabsTrigger>
          <TabsTrigger value="multimedia">چندرسانه‌ای</TabsTrigger>
        </TabsList>
        
        {/* All content tab */}
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => renderArticleCard(article))}
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6 text-gold-600 dark:text-gold-400 text-center">
            منابع رسول
          </h2>
          
          <div className="mt-6">
            <h3 className="text-xl font-medium mb-4 text-slate-700 dark:text-slate-300">
              <FileDown className="inline-block mr-2 h-5 w-5 text-gold-500" />
              پیوست‌ها (فایل PDF)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterMaterials(messengerMaterials.appendices).map(item => renderPdfCard(item))}
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-medium mb-4 text-slate-700 dark:text-slate-300">
              <BookMarked className="inline-block mr-2 h-5 w-5 text-gold-500" />
              دیدگاه‌های تسلیم‌شدگان (فایل PDF)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterMaterials(messengerMaterials.submitters).map(item => renderPdfCard(item))}
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-medium mb-4 text-slate-700 dark:text-slate-300">
              <Youtube className="inline-block mr-2 h-5 w-5 text-gold-500" />
              ویدیوها
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterMaterials(messengerMaterials.videos).map(item => renderVideoCard(item))}
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-medium mb-4 text-slate-700 dark:text-slate-300">
              <Headphones className="inline-block mr-2 h-5 w-5 text-gold-500" />
              فایل‌های صوتی
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterMaterials(messengerMaterials.audios).map(item => renderAudioCard(item))}
            </div>
          </div>
        </TabsContent>
        
        {/* Articles tab */}
        <TabsContent value="articles" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.filter(a => a.category === "articles").map(article => renderArticleCard(article))}
          </div>
          
          {filteredArticles.filter(a => a.category === "articles").length === 0 && renderEmptyState()}
        </TabsContent>
        
        {/* PDF tab */}
        <TabsContent value="pdf" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.filter(a => a.category === "pdf").map(article => renderArticleCard(article))}
          </div>
          
          {filteredArticles.filter(a => a.category === "pdf").length === 0 && renderEmptyState()}
        </TabsContent>
        
        {/* Messenger materials tab */}
        <TabsContent value="messenger" className="mt-6">
          <div className="mb-10">
            <h3 className="text-xl font-medium mb-4 text-slate-700 dark:text-slate-300">
              <FileDown className="inline-block mr-2 h-5 w-5 text-gold-500" />
              پیوست‌ها (فایل PDF)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterMaterials(messengerMaterials.appendices).map(item => renderPdfCard(item))}
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-medium mb-4 text-slate-700 dark:text-slate-300">
              <BookMarked className="inline-block mr-2 h-5 w-5 text-gold-500" />
              دیدگاه‌های تسلیم‌شدگان (فایل PDF)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterMaterials(messengerMaterials.submitters).map(item => renderPdfCard(item))}
            </div>
          </div>
          
          {filterMaterials([...messengerMaterials.appendices, ...messengerMaterials.submitters]).length === 0 && renderEmptyState()}
        </TabsContent>
        
        {/* Multimedia tab */}
        <TabsContent value="multimedia" className="mt-6">
          <div className="mb-10">
            <h3 className="text-xl font-medium mb-4 text-slate-700 dark:text-slate-300">
              <Youtube className="inline-block mr-2 h-5 w-5 text-gold-500" />
              ویدیوها
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterMaterials(messengerMaterials.videos).map(item => renderVideoCard(item))}
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-medium mb-4 text-slate-700 dark:text-slate-300">
              <Headphones className="inline-block mr-2 h-5 w-5 text-gold-500" />
              فایل‌های صوتی
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterMaterials(messengerMaterials.audios).map(item => renderAudioCard(item))}
            </div>
          </div>
          
          {filterMaterials([...messengerMaterials.videos, ...messengerMaterials.audios]).length === 0 && renderEmptyState()}
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Helper function to render article cards based on type
const renderArticleCard = (article: any) => {
  if (article.category === "articles") {
    return (
      <Card key={article.id} className="overflow-hidden border border-slate-200 dark:border-slate-700 transition-all hover:shadow-md">
        {article.thumbnail && (
          <div className="h-44 overflow-hidden">
            <img 
              src={article.thumbnail} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-lg">{article.title}</CardTitle>
          <CardDescription>{article.description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>{article.author}</span>
          <span>{article.date}</span>
        </CardFooter>
        <div className="px-6 pb-5">
          <Button className="w-full">
            <BookOpen className="mr-2 h-4 w-4" />
            مطالعه مقاله
          </Button>
        </div>
      </Card>
    );
  } else {
    return (
      <Card key={article.id} className="border border-slate-200 dark:border-slate-700 transition-all hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <FileText className="mr-2 h-5 w-5 text-gold-500" />
            {article.title}
          </CardTitle>
          <CardDescription>{article.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
            <span>{article.author}</span>
            <span>{article.fileSize}</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <span className="text-sm text-slate-500 dark:text-slate-400">{article.date}</span>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            دانلود
          </Button>
        </CardFooter>
      </Card>
    );
  }
};

// Helper function to render PDF card
const renderPdfCard = (item: any) => {
  return (
    <Card key={item.id} className="border border-slate-200 dark:border-slate-700 transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <FileText className="mr-2 h-5 w-5 text-gold-500" />
          {item.title}
        </CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>{item.author}</span>
          <span>{item.fileSize}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-slate-500 dark:text-slate-400">{item.date}</span>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          دانلود
        </Button>
      </CardFooter>
    </Card>
  );
};

// Helper function to render video card
const renderVideoCard = (item: any) => {
  return (
    <Card key={item.id} className="border border-slate-200 dark:border-slate-700 transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Youtube className="mr-2 h-5 w-5 text-red-500" />
          {item.title}
        </CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>{item.author}</span>
          <span>{item.duration}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>
          <Youtube className="mr-2 h-4 w-4" />
          مشاهده در یوتیوب
        </Button>
      </CardFooter>
    </Card>
  );
};

// Helper function to render audio card
const renderAudioCard = (item: any) => {
  return (
    <Card key={item.id} className="border border-slate-200 dark:border-slate-700 transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Headphones className="mr-2 h-5 w-5 text-gold-500" />
          {item.title}
        </CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>{item.author}</span>
          <span>{item.duration}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>
          <Headphones className="mr-2 h-4 w-4" />
          گوش دادن
        </Button>
      </CardFooter>
    </Card>
  );
};

// Helper function to render empty state
const renderEmptyState = () => {
  return (
    <div className="text-center py-12">
      <FileText className="mx-auto h-12 w-12 text-slate-300 dark:text-slate-600 mb-3" />
      <h3 className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-1">هیچ موردی یافت نشد</h3>
      <p className="text-slate-500 dark:text-slate-400">لطفا عبارت جستجوی خود را تغییر دهید</p>
    </div>
  );
};

export default Articles;
