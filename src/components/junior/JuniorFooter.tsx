export function JuniorFooter() {
  return (
    <footer className="py-12 border-t-2 border-[#C1E1C1]" style={{ background: "#fafafa" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-extrabold text-sm" style={{ background: "#B280D0" }}>
                JR
              </div>
              <span className="font-extrabold text-2xl" style={{ color: "#B280D0" }}>
                JUNIOR
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              IT-школа для детей 5–18 лет в Керчи. Робототехника, программирование, 3D-моделирование.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-extrabold text-gray-800 mb-4">Разделы</h4>
            <ul className="space-y-2">
              {[
                { label: "О школе", href: "#about" },
                { label: "Курсы", href: "#courses" },
                { label: "Цены", href: "#prices" },
                { label: "Контакты", href: "#contacts" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-gray-500 hover:text-[#B280D0] font-semibold transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-extrabold text-gray-800 mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-500 text-sm font-semibold">
              <div>📍 Керчь, Кооперативный пер. 26, офис 325</div>
              <div>
                <a href="tel:+79788685437" className="text-[#B280D0] hover:underline">
                  📞 +7 (978) 868-54-37
                </a>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              {["📘", "📸", "💬"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg hover:scale-110 transition-transform"
                  style={{ background: "#D1B3E8" }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-sm">© 2026 IT-школа JUNIOR. Все права защищены.</p>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-[#B280D0] transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default JuniorFooter
