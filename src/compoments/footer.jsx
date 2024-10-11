export default function Footer(){
    return(
        <>
      <div className="bg-black text-white py-8">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
    <div className="footer-section">
      <h3 className="text-xl font-semibold mb-4 text-teal-400">تابعنا على</h3>
      <ul className="space-y-2">
        <li><a href="https://www.tiktok.com/@noousra" className="hover:text-yellow-400 flex justify-center md:justify-end"><i className="fab fa-tiktok ml-2"></i> تيكتوك</a></li>
        <li><a href="https://wa.me/42364051" className="hover:text-yellow-400 flex justify-center md:justify-end"><i className="fab fa-whatsapp ml-2"></i> واتساب</a></li>
        <li><a href="https://www.youtube.com/@noousra" className="hover:text-yellow-400 flex justify-center md:justify-end"><i className="fab fa-youtube ml-2"></i> يوتيوب</a></li>
        <li><a href="https://www.snapchat.com/@noousra" className="hover:text-yellow-400 flex justify-center md:justify-end"><i className="fab fa-snapchat ml-2"></i> سنابشات</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <ul className="space-y-2">
        <li><a href="/" className="hover:text-yellow-400 flex justify-center md:justify-end"><i className="bx bx-home ml-2"></i> الرئيسية</a></li>
        <li><a href="#" className="hover:text-yellow-400 flex justify-center md:justify-end"><i className="bx bx-clipboard ml-2"></i> لوحي</a></li>
        <li><a href="/bookstore" className="hover:text-yellow-400 flex justify-center md:justify-end"><i className="bx bx-book ml-2"></i> المكتبة</a></li>
        <li><a href="#" className="hover:text-yellow-400 flex justify-center md:justify-end"><i className="bx bx-phone ml-2"></i> تواصل معنا</a></li>
      </ul>
    </div>

    <div className="footer-section text-center md:text-right">
      <h3 className="text-xl font-semibold mb-4 text-teal-400">نصرة</h3>
      <p className="mb-4">
        هو موقع إسلامي مشهور والأول من نوعه في موريتانيا، يقدم محتوى ديني شامل يشمل الأخبار،
        تحفيظ القرآن، ومكتبة إسلامية. يتابعه أكثر من 100,000 شخص على وسائل التواصل الاجتماعي،
        ويُعتبر مصدرًا موثوقًا لنشر المعرفة الإسلامية بطريقة تخدم جميع فئات المجتمع.
      </p>
      <p className="flex justify-center md:justify-end items-center mb-2">
        <i className="fas fa-map-marker-alt ml-2"></i> موريتانيا _ انواكشوط
      </p>
      <p className="flex justify-center md:justify-end items-center mb-2">
        <i className="fas fa-envelope ml-2"></i> noousra@gmail.com
      </p>
      <p className="flex justify-center md:justify-end items-center">
        <i className="fas fa-phone ml-2"></i> +222 42 36 40 51
      </p>
    </div>
  </div>

  <div className="text-center border-t border-gray-700 mt-8 pt-4">
    <p>حقوق النشر © 2024 نصرة. جميع الحقوق محفوظة.</p>
    <p>
      <a href="#" className="hover:text-yellow-400">سياسة الخصوصية</a> | <a href="#" className="hover:text-yellow-400">شروط الخدمة</a>
    </p>
  </div>
</div>

        </>
    );
}