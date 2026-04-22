const courses = [
  {
    emoji: "🤖",
    title: "Lego EV3",
    subtitle: "Робототехника",
    desc: "Программируемые роботы, датчики, соревнования. Для детей 8–15 лет.",
    age: "8–15 лет",
    color: "#D1B3E8",
    bg: "#f9f3fd",
  },
  {
    emoji: "🧱",
    title: "Lego WeDo 2.0",
    subtitle: "Робототехника",
    desc: "Первые шаги в робототехнике. Простые механизмы и программирование. Для детей 5–9 лет.",
    age: "5–9 лет",
    color: "#C1E1C1",
    bg: "#f3fbf3",
  },
  {
    emoji: "🐱",
    title: "Scratch",
    subtitle: "Программирование",
    desc: "Создаём игры и анимации визуальным программированием. Для детей 6–11 лет.",
    age: "6–11 лет",
    color: "#ffd6a5",
    bg: "#fffbf3",
  },
  {
    emoji: "📱",
    title: "AppInventor",
    subtitle: "Разработка приложений",
    desc: "Создаём настоящие мобильные приложения для Android без сложного кода.",
    age: "10–16 лет",
    color: "#D1B3E8",
    bg: "#f9f3fd",
  },
  {
    emoji: "🎮",
    title: "Roblox",
    subtitle: "Gamedev",
    desc: "Проектируем и публикуем собственные игры на платформе Roblox. Lua-программирование.",
    age: "9–16 лет",
    color: "#C1E1C1",
    bg: "#f3fbf3",
  },
  {
    emoji: "🐍",
    title: "Python",
    subtitle: "Программирование",
    desc: "Профессиональный язык программирования. Алгоритмы, игры, автоматизация.",
    age: "12–18 лет",
    color: "#a5c8ff",
    bg: "#f0f5ff",
  },
  {
    emoji: "🎨",
    title: "3D-моделирование",
    subtitle: "Компьютерная графика",
    desc: "Blender, Tinkercad — создаём 3D-объекты, персонажей и модели для печати.",
    age: "10–18 лет",
    color: "#ffb3b3",
    bg: "#fff5f5",
    wide: true,
  },
]

export function JuniorCourses() {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="badge-green">📚 Наши направления</span>
        </div>
        <h2 className="section-title">Выбери свой курс!</h2>
        <p className="section-subtitle">
          Более 7 направлений для детей разного возраста. Найдём занятие по душе для каждого ребёнка.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className={`junior-card p-6 ${course.wide ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{ borderColor: course.color }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4"
                style={{ background: course.bg }}
              >
                {course.emoji}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#999" }}>
                {course.subtitle}
              </div>
              <h3 className="text-xl font-extrabold mb-2 text-gray-800">{course.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{course.desc}</p>
              <div
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: course.color + "55", color: "#444" }}
              >
                👤 {course.age}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contacts" className="btn-primary text-lg px-10 py-4 inline-block">
            🎯 Записаться на пробное занятие
          </a>
        </div>
      </div>
    </section>
  )
}

export default JuniorCourses
