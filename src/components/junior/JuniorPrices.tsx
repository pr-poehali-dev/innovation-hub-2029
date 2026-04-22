export function JuniorPrices() {
  return (
    <section id="prices" className="py-24" style={{ background: "linear-gradient(135deg, #f0faf0 0%, #f5edfb 100%)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="badge-purple">💰 Стоимость обучения</span>
        </div>
        <h2 className="section-title">Доступно и понятно</h2>
        <p className="section-subtitle">
          Никаких скрытых платежей. Прозрачная стоимость для каждой семьи.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Main price card */}
          <div className="junior-card p-8 text-center relative overflow-hidden" style={{ borderColor: "#7B5EA7" }}>
            <div className="absolute top-4 right-4">
              <span className="badge-purple">Хит!</span>
            </div>
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-xl font-extrabold text-gray-800 mb-2">Ежемесячное обучение</h3>
            <div className="text-6xl font-extrabold my-6" style={{ color: "#7B5EA7" }}>
              4 800 ₽
            </div>
            <div className="text-gray-400 font-semibold mb-6">в месяц</div>
            <ul className="text-left space-y-3 text-gray-600 mb-8">
              {[
                "✅ 4 занятия в месяц",
                "✅ Опытные педагоги",
                "✅ Все материалы включены",
                "✅ Доступ к оборудованию",
                "✅ Участие в мероприятиях школы",
              ].map((item, i) => (
                <li key={i} className="font-semibold">{item}</li>
              ))}
            </ul>
            <a href="#contacts" className="btn-primary w-full text-center block text-lg py-4">
              Записаться
            </a>
            <div className="mt-4 rounded-2xl px-4 py-3 text-sm font-bold text-[#5c2d91]" style={{ background: "#f0e6fa" }}>
              🎁 При оплате 2 и более абонементов — скидка! Уточняйте у администратора.
            </div>
          </div>

          {/* Single lesson card */}
          <div className="junior-card p-8 text-center" style={{ borderColor: "#3DBA6E" }}>
            <div className="text-5xl mb-4">📖</div>
            <h3 className="text-xl font-extrabold text-gray-800 mb-2">Разовое занятие</h3>
            <div className="text-4xl font-extrabold my-6" style={{ color: "#3DBA6E" }}>
              1 200 ₽
            </div>
            <div className="text-gray-400 font-semibold mb-6">за одно занятие</div>
            <ul className="text-left space-y-3 text-gray-600 mb-8">
              {[
                "✅ Без абонемента",
                "✅ Опытный педагог",
                "✅ Все материалы включены",
                "✅ Доступ к оборудованию",
                "✅ Подходит для знакомства",
              ].map((item, i) => (
                <li key={i} className="font-semibold">{item}</li>
              ))}
            </ul>
            <a href="#contacts" className="btn-secondary w-full text-center block text-lg py-4">
              Записаться
            </a>
          </div>
        </div>

        {/* Free trial banner */}
        <div
          className="rounded-3xl p-8 text-center text-white"
          style={{ background: "linear-gradient(135deg, #7B5EA7, #5a4280)" }}
        >
          <div className="text-4xl mb-3">🎉</div>
          <h3 className="text-2xl font-extrabold mb-2">Первое занятие — бесплатно!</h3>
          <p className="opacity-90 mb-6">Приходите познакомиться со школой. Никаких обязательств.</p>
          <a href="#contacts" className="inline-block bg-white font-extrabold px-8 py-3 rounded-2xl text-[#7B5EA7] hover:scale-105 transition-transform">
            Записаться на пробный урок
          </a>
        </div>
      </div>
    </section>
  )
}

export default JuniorPrices