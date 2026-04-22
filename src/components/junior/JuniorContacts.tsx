import { useState } from "react"

const courseOptions = [
  "Lego EV3 — Робототехника",
  "Lego WeDo 2.0 — Робототехника",
  "Scratch — Программирование",
  "AppInventor — Мобильные приложения",
  "Roblox — Gamedev",
  "Python — Программирование",
  "3D-моделирование и компьютерная графика",
  "Не знаю — помогите выбрать",
]

export function JuniorContacts() {
  const [form, setForm] = useState({ name: "", phone: "", course: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacts" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="badge-green">📞 Контакты</span>
        </div>
        <h2 className="section-title">Запишитесь на пробное занятие</h2>
        <p className="section-subtitle">
          Первое занятие — бесплатно! Оставьте заявку, и мы свяжемся с вами в течение часа.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="junior-card p-8" style={{ borderColor: "#D1B3E8" }}>
            {sent ? (
              <div className="text-center py-10">
                <div className="text-7xl mb-4">🎉</div>
                <h3 className="text-2xl font-extrabold text-gray-800 mb-3">Заявка отправлена!</h3>
                <p className="text-gray-500">Мы свяжемся с вами в течение часа. Добро пожаловать в JUNIOR!</p>
                <button onClick={() => setSent(false)} className="btn-secondary mt-6">
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Имя ребёнка *</label>
                  <input
                    type="text"
                    required
                    placeholder="Например: Артём"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#B280D0] outline-none transition-colors font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Телефон родителя *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#B280D0] outline-none transition-colors font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Интересующий курс</label>
                  <select
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#B280D0] outline-none transition-colors font-semibold bg-white text-gray-700"
                  >
                    <option value="">Выберите курс...</option>
                    {courseOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn-primary w-full text-lg py-4">
                  🎯 Записаться на пробный урок
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="junior-card p-6 flex items-start gap-4" style={{ borderColor: "#C1E1C1" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: "#f3fbf3" }}>
                📍
              </div>
              <div>
                <div className="font-extrabold text-gray-800 mb-1">Адрес</div>
                <div className="text-gray-600">г. Керчь, Кооперативный пер. 26, офис 325</div>
              </div>
            </div>

            {/* Phone */}
            <div className="junior-card p-6 flex items-start gap-4" style={{ borderColor: "#D1B3E8" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: "#f9f3fd" }}>
                📞
              </div>
              <div>
                <div className="font-extrabold text-gray-800 mb-1">Телефон</div>
                <a href="tel:+79788685437" className="text-[#B280D0] font-bold text-lg hover:underline">
                  +7 (978) 868-54-37
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="junior-card p-6 flex items-start gap-4" style={{ borderColor: "#ffd6a5" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: "#fffbf3" }}>
                🕐
              </div>
              <div>
                <div className="font-extrabold text-gray-800 mb-1">Режим работы</div>
                <div className="text-gray-600">Пн–Пт: 10:00 – 20:00</div>
                <div className="text-gray-600">Сб: 10:00 – 16:00</div>
              </div>
            </div>

            {/* Free trial callout */}
            <div className="rounded-3xl p-6 text-center" style={{ background: "linear-gradient(135deg, #C1E1C1, #D1B3E8)" }}>
              <div className="text-3xl mb-2">🎁</div>
              <div className="font-extrabold text-white text-lg">Первое занятие бесплатно!</div>
              <div className="text-white/80 text-sm mt-1">Приходите познакомиться</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JuniorContacts
