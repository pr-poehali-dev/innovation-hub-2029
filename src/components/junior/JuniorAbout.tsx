const values = [
  { emoji: "🎓", title: "Опытные педагоги", desc: "Специалисты с профильным образованием и любовью к детям." },
  { emoji: "🔬", title: "Современное оборудование", desc: "Наборы Lego, 3D-принтеры, компьютеры и все необходимые материалы." },
  { emoji: "🏆", title: "Соревнования", desc: "Регулярно участвуем в турнирах регионального и федерального уровня." },
  { emoji: "🤝", title: "Малые группы", desc: "Каждый ребёнок получает внимание педагога. Не теряемся в толпе." },
]

export function JuniorAbout() {
  return (
    <section id="about" className="py-24" style={{ background: "linear-gradient(180deg, #f5edfb 0%, #f0faf0 100%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image placeholder */}
          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden aspect-square flex items-center justify-center relative"
              style={{ background: "linear-gradient(135deg, #3DBA6E, #7B5EA7)" }}
            >
              {/* Fun decorative content */}
              <div className="text-center text-white">
                <img
                  src="https://cdn.poehali.dev/projects/26448a97-ef11-4ace-b89e-d8c4fba6dde2/bucket/a08e096a-5ff4-4af4-9261-5ef65aa876d6.png"
                  alt="Робот с ноутбуком"
                  className="w-64 h-64 object-contain mb-2 mx-auto drop-shadow-xl"
                />
                <div className="font-extrabold text-2xl opacity-90">Учимся с радостью!</div>
              </div>
              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-white rounded-2xl p-3 shadow-lg float-anim">🤖</div>
              <div className="absolute bottom-4 left-4 bg-white rounded-2xl p-3 shadow-lg float-anim-2">⚙️</div>
              <div className="absolute bottom-4 right-8 bg-white rounded-2xl p-3 shadow-lg float-anim">🎮</div>
            </div>

            {/* Stats chip */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 text-center">
              <div className="text-3xl font-extrabold" style={{ color: "#7B5EA7" }}>7+</div>
              <div className="text-sm font-semibold text-gray-500">курсов</div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <div className="badge-purple mb-6 w-fit">🏫 О нашей школе</div>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
              Место, где дети{" "}
              <span style={{ color: "#7B5EA7" }}>влюбляются</span>{" "}
              в технологии
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              IT-школа JUNIOR в Керчи — это пространство, где каждый ребёнок раскрывает свой потенциал в мире технологий. Мы верим: учёба должна быть увлекательной!
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Наши ученики не просто изучают теорию — они создают реальных роботов, пишут настоящие программы и выступают на соревнованиях по всей России.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl" style={{ background: "white" }}>
                  <div className="text-2xl flex-shrink-0">{v.emoji}</div>
                  <div>
                    <div className="font-bold text-gray-800 mb-1">{v.title}</div>
                    <div className="text-sm text-gray-500">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JuniorAbout