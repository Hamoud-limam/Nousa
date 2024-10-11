

export default function Header()
{    return (
    <header className="bg-white shadow-sm">
    <div className="container mx-auto px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <a href="/contact" className="text-gray-800 hover:text-green-500">
          <span className="ml-2 hidden md:inline">تواصل معنا</span>
        </a>
        <a href="/bookstore" className="text-gray-800 hover:text-green-500">
          <span className="ml-2 hidden md:inline">المكتبة</span>
        </a>
        <a href="/laohi" className="text-gray-800 hover:text-green-500">
          <span className="ml-2 hidden md:inline">لوحي</span>
        </a>
        <a href="/" className="text-gray-800 hover:text-green-500">
          <span className="ml-2 hidden md:inline">الرئيسية</span>
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <a href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="w-20 h-15" />
          <span className="ml-2 text-gray-800 font-bold hidden md:inline">نصرة</span>
        </a>
      </div>
    </div>
  </header>


    );
};
