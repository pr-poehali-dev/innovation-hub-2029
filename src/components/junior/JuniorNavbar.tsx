import { useState } from "react"

export function JuniorNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b-2 border-[#C1E1C1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-extrabold text-sm" style={{ background: "#B280D0" }}>
              JR
            </div>
            <span className="font-extrabold text-2xl" style={{ color: "#B280D0" }}>
              JUNIOR
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "О школе", href: "#about" },
              { label: "Курсы", href: "#courses" },
              { label: "Цены", href: "#prices" },
              { label: "Контакты", href: "#contacts" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-semibold text-gray-600 hover:text-[#B280D0] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+79788685437" className="font-bold text-gray-700 hover:text-[#B280D0] transition-colors">
              +7 (978) 868-54-37
            </a>
            <a href="#contacts" className="btn-primary text-sm">
              Записаться
            </a>
          </div>

          {/* Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-6 h-0.5 bg-[#B280D0] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#B280D0] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#B280D0] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#C1E1C1]">
            <div className="flex flex-col gap-3">
              {[
                { label: "О школе", href: "#about" },
                { label: "Курсы", href: "#courses" },
                { label: "Цены", href: "#prices" },
                { label: "Контакты", href: "#contacts" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-semibold text-gray-600 hover:text-[#B280D0] px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="tel:+79788685437" className="font-bold text-[#B280D0] px-2">
                +7 (978) 868-54-37
              </a>
              <a href="#contacts" className="btn-primary text-center text-sm" onClick={() => setIsOpen(false)}>
                Записаться на курс
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default JuniorNavbar
