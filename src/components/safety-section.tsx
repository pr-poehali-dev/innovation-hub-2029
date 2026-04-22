export function SafetySection() {
  const certifications = [
    { name: "FDA 510(k)", desc: "Одобрено для медицинского применения в США" },
    { name: "CE Mark", desc: "Соответствие директивам ЕС по медицинским устройствам" },
    { name: "ISO 14971", desc: "Управление рисками медицинских изделий" },
    { name: "HIPAA", desc: "Полная защита персональных медицинских данных" },
  ]

  const principles = [
    {
      icon: "🔐",
      title: "End-to-end шифрование",
      desc: "Нейронные данные зашифрованы на уровне чипа. Ни один сервер не хранит расшифрованные данные.",
    },
    {
      icon: "🔬",
      title: "Биосовместимые материалы",
      desc: "Полимерная матрица и титановый корпус прошли 10 000+ часов in vivo тестирования.",
    },
    {
      icon: "↩️",
      title: "Полная обратимость",
      desc: "Имплант может быть безопасно удалён в любой момент. Никаких необратимых изменений.",
    },
    {
      icon: "🤖",
      title: "Автономный мониторинг",
      desc: "ИИ-система непрерывно отслеживает состояние тканей и сигнализирует при аномалиях.",
    },
  ]

  return (
    <section id="safety" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            Безопасность — <span className="text-red-500">наш приоритет №1</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Мы прошли строжайшие клинические испытания и получили все необходимые международные сертификаты.
            Ваши данные и здоровье защищены на каждом уровне.
          </p>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {principles.map((p, i) => (
            <div key={i} className="flex gap-5 p-6 border border-red-500/20 rounded-xl bg-white/3 hover:border-red-500/40 transition-colors duration-300">
              <div className="text-3xl flex-shrink-0">{p.icon}</div>
              <div>
                <h3 className="font-orbitron text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border border-red-500/20 rounded-2xl p-8 bg-white/3">
          <h3 className="font-orbitron text-white text-xl font-bold mb-8 text-center">Сертификаты и одобрения</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((c, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-red-500 mb-3">
                  <span className="font-orbitron text-red-500 text-xs font-bold">✓</span>
                </div>
                <div className="font-orbitron text-white font-semibold text-sm mb-1">{c.name}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
