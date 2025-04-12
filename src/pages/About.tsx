
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-3 text-gold-600 dark:text-gold-400">
          درباره نور فارسی قرآن
        </h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          آشنایی با پروژه نور فارسی قرآن و اهداف آن
        </p>
      </div>
      
      <Card className="mb-8 border border-gold-100 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gold-600 dark:text-gold-400">
            معرفی پروژه
          </CardTitle>
          <CardDescription>
            اهداف و چشم‌انداز نور فارسی قرآن
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-justify">
          <p>
            پروژه «نور فارسی قرآن» با هدف فراهم کردن امکان دسترسی آسان به قرآن کریم و تفاسیر آن به زبان فارسی طراحی شده است. این پروژه، امکان مطالعه متن قرآن، جستجو در آیات و سوره‌ها، و دسترسی به منابع آموزشی مرتبط را فراهم می‌کند.
          </p>
          <p>
            در دنیای امروز که فناوری نقش مهمی در زندگی روزمره افراد دارد، ما معتقدیم که ابزارهای دیجیتال می‌توانند نقش مهمی در تسهیل دسترسی به منابع دینی و اسلامی ایفا کنند. این برنامه با الهام از این دیدگاه، طراحی و توسعه یافته است.
          </p>
          <p>
            این پروژه با تمرکز بر تجربه کاربری آسان و طراحی زیبا، تلاش می‌کند تا مطالعه قرآن را برای همه کاربران، از مبتدی تا پیشرفته، لذت‌بخش و آموزنده سازد.
          </p>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="border border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              ویژگی‌های اصلی
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc list-inside">
              <li>جستجوی ساده و سریع در سوره‌ها و آیات</li>
              <li>امکان مطالعه متن قرآن با ترجمه فارسی</li>
              <li>حالت مطالعه روز و شب برای راحتی چشم</li>
              <li>دسترسی به مقالات و منابع آموزشی</li>
              <li>طراحی پاسخگو برای استفاده در تمام دستگاه‌ها</li>
              <li>رابط کاربری ساده و زیبا برای تجربه بهتر</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="border border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              آینده پروژه
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc list-inside">
              <li>افزودن تفاسیر متعدد از مفسران مختلف</li>
              <li>امکان پخش صوت قرآن با قرائت قاریان مشهور</li>
              <li>افزودن ابزارهای یادگیری و حفظ قرآن</li>
              <li>ایجاد بخش پرسش و پاسخ برای مباحث قرآنی</li>
              <li>پشتیبانی از چندین زبان علاوه بر فارسی</li>
              <li>توسعه نسخه‌های موبایل برای دسترسی آسان‌تر</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Card className="text-center border border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            تماس با ما
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            برای ارسال نظرات، پیشنهادات یا همکاری با تیم نور فارسی قرآن، می‌توانید از طریق ایمیل زیر با ما در ارتباط باشید.
          </p>
          <a href="mailto:info@nurefarsi.com" className="text-gold-600 dark:text-gold-400 font-medium hover:underline">
            info@nurefarsi.com
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
