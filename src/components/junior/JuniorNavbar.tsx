import { useState } from "react"

export function JuniorNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b-2 border-[#3DBA6E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/26448a97-ef11-4ace-b89e-d8c4fba6dde2/bucket/3c660bfe-c76c-4a65-83e1-046928196081.png"
              alt="IT-школа JUNIOR"
              className="h-10 w-auto object-contain"
            />
          </a>

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
                className="font-semibold text-gray-600 hover:text-[#7B5EA7] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+79788685437" className="font-bold text-gray-700 hover:text-[#7B5EA7] transition-colors">
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
            <span className={`block w-6 h-0.5 bg-[#7B5EA7] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#7B5EA7] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#7B5EA7] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#3DBA6E]">
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
              <a href="tel:+79788685437" className="font-bold text-[#7B5EA7] px-2">
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