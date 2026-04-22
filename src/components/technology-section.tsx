export function TechnologySection() {
  const techs = [
    {
      label: "Нейронные электроды",
      value: "4096",
      unit: "каналов",
      desc: "Ультратонкие полимерные электроды захватывают активность отдельных нейронов с беспрецедентным разрешением.",
    },
    {
      label: "Задержка отклика",
      value: "<1",
      unit: "мс",
      desc: "Обработка нейронных сигналов в реальном времени — быстрее, чем моргание глаза.",
    },
    {
      label: "Точность декодинга",
      value: "99.7",
      unit: "%",
      desc: "Адаптивные ИИ-модели распознают намерения пользователя практически без ошибок.",
    },
    {
      label: "Автономность",
      value: "24",
      unit: "часа",
      desc: "Беспроводная зарядка. Весь день без ограничений.",
    },
  ]

  const stack = [
    { name: "Нейрочип N-X9", detail: "Специализированный ASIC для обработки биосигналов на месте" },
    { name: "ИИ-движок Cortex", detail: "Трансформерная архитектура, обученная на 50+ млн нейронных паттернов" },
    { name: "Протокол NeuralLink™", detail: "Зашифрованная беспроводная передача данных мозг→устройство" },
    { name: "Облако SynapseCloud", detail: "Персонализация и обновления модели без вмешательств" },
  ]

  return (
    <section id="technology" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            Технология <span className="text-red-500">SynapseAI</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Пять лет исследований, 200+ патентов, сотрудничество с ведущими нейронаучными центрами мира —
            всё это воплощено в одной платформе.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {techs.map((t, i) => (
            <div
              key={i}
              className="border border-red-500/20 rounded-xl p-6 bg-white/5 hover:border-red-500/50 transition-colors duration-300"
            >
              <div className="font-orbitron text-4xl font-bold text-red-500 mb-1">{t.value}</div>
              <div className="text-sm text-red-400 uppercase tracking-widest mb-3">{t.unit}</div>
              <div className="text-white font-semibold mb-2">{t.label}</div>
              <div className="text-gray-400 text-sm leading-relaxed">{t.desc}</div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stack.map((s, i) => (
            <div key={i} className="flex items-start gap-4 p-6 border border-red-500/10 rounded-xl bg-white/3 hover:bg-white/5 transition-all duration-300">
              <div className="w-3 h-3 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
              <div>
                <div className="text-white font-orbitron font-semibold mb-1">{s.name}</div>
                <div className="text-gray-400 text-sm leading-relaxed">{s.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
