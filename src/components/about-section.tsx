export function AboutSection() {
  const milestones = [
    { year: "2019", text: "Основание компании. Первые лабораторные прототипы нейроэлектродов." },
    { year: "2021", text: "Успешные доклинические испытания на 500+ пациентах. Серия A — $120M." },
    { year: "2023", text: "Получение одобрения FDA. Первый коммерческий имплант выполнен в клинике." },
    { year: "2025", text: "Более 1 200 активных пользователей. Партнёрства с 40+ клиниками мира." },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
              О <span className="text-red-500">нас</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              SynapseAI — нейротехнологическая компания, миссия которой — стереть границу между человеческим мозгом
              и цифровым миром. Мы верим, что технологии должны служить человеку на самом глубоком уровне.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Наша команда из 300+ нейроучёных, инженеров и врачей работает над единственной в мире платформой,
              которая сочетает медицинскую безопасность с возможностями когнитивного усиления.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { val: "300+", label: "Специалистов" },
                { val: "200+", label: "Патентов" },
                { val: "40+", label: "Клиник-партнёров" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-orbitron text-3xl font-bold text-red-500">{s.val}</div>
                  <div className="text-gray-400 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 h-full bg-red-500/20 mt-2" />}
                </div>
                <div className="pb-6">
                  <div className="font-orbitron text-red-500 font-bold text-sm mb-1">{m.year}</div>
                  <div className="text-gray-300 leading-relaxed">{m.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
