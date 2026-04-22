const competitions = [
  {
    emoji: "🔴",
    name: "РедФест",
    level: "Региональный",
    desc: "Ежегодный фестиваль робототехники. Наши ученики — постоянные призёры!",
    badge: "Региональный чемпион",
    badgeColor: "#C1E1C1",
    textColor: "#2d6a2d",
  },
  {
    emoji: "💡",
    name: "IT-Jump",
    level: "Региональный",
    desc: "Соревнования по программированию и IT-технологиям среди школьников.",
    badge: "Призёр",
    badgeColor: "#D1B3E8",
    textColor: "#5c2d91",
  },
  {
    emoji: "🏙️",
    name: "Санкт-Петербург",
    level: "Федеральный",
    desc: "Победители региона едут на федеральные соревнования. Проезд и проживание оплачены!",
    badge: "Федеральный уровень",
    badgeColor: "#a5c8ff",
    textColor: "#1a4a8a",
  },
]

export function JuniorAchievements() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="badge-green">🏆 Наши достижения</span>
        </div>
        <h2 className="section-title">Мы побеждаем на соревнованиях!</h2>
        <p className="section-subtitle">
          Участвуем в региональных и федеральных чемпионатах. Лучших отправляем в Санкт-Петербург за счёт организаторов.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {competitions.map((comp, i) => (
            <div key={i} className="junior-card p-8 text-center">
              <div className="text-5xl mb-4">{comp.emoji}</div>
              <div
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-bold mb-4"
                style={{ background: comp.badgeColor, color: comp.textColor }}
              >
                🥇 {comp.badge}
              </div>
              <h3 className="text-2xl font-extrabold text-gray-800 mb-1">{comp.name}</h3>
              <div className="text-sm font-semibold text-gray-400 mb-3">{comp.level}</div>
              <p className="text-gray-500 leading-relaxed">{comp.desc}</p>
            </div>
          ))}
        </div>

        {/* SPb trip highlight */}
        <div
          className="rounded-3xl p-10 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #f3fbf3, #f9f3fd)" }}
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-30" style={{ background: "#C1E1C1" }} />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full opacity-20" style={{ background: "#D1B3E8" }} />
          <div className="relative z-10">
            <div className="text-6xl mb-4">✈️</div>
            <h3 className="text-3xl font-extrabold text-gray-800 mb-3">
              Победители едут в{" "}
              <span style={{ color: "#B280D0" }}>Санкт-Петербург!</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
              Лучшие ученики школы JUNIOR выходят на федеральный уровень. Организаторы оплачивают проезд и проживание — ваш ребёнок путешествует и побеждает!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["🏅 Опыт соревнований", "🤝 Новые друзья", "✈️ Путешествия", "📜 Грамоты и дипломы"].map((tag, i) => (
                <span key={i} className="bg-white px-4 py-2 rounded-full font-bold text-gray-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JuniorAchievements
