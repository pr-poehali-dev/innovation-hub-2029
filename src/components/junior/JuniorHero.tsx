export function JuniorHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16" style={{ background: "linear-gradient(135deg, #f0faf0 0%, #f5edfb 50%, #edf5ff 100%)" }}>
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-40 float-anim" style={{ background: "#C1E1C1", filter: "blur(60px)" }} />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-30 float-anim-2" style={{ background: "#D1B3E8", filter: "blur(80px)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20" style={{ background: "#C1E1C1", filter: "blur(100px)" }} />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="slide-up">
            <div className="badge-purple mb-6 w-fit">
              🚀 IT-школа для детей 5–18 лет
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6" style={{ color: "#222" }}>
              IT-школа{" "}
              <span style={{ color: "#B280D0" }}>JUNIOR</span>
              {" "}–{" "}
              <span style={{ color: "#4a9a4a" }}>твой старт</span>{" "}
              в мир технологий!
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Робототехника, программирование, 3D-моделирование для детей 5–18 лет. Учимся, создаём, побеждаем на соревнованиях!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacts" className="btn-primary text-center text-lg px-8 py-4">
                🎯 Пробное занятие
              </a>
              <a href="#courses" className="btn-secondary text-center text-lg px-8 py-4">
                📚 Смотреть курсы
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              {[
                { val: "5–18", label: "лет" },
                { val: "7+", label: "курсов" },
                { val: "🏆", label: "чемпионы" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-extrabold" style={{ color: "#B280D0" }}>{s.val}</div>
                  <div className="text-sm text-gray-500 font-semibold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center items-center relative">
            {/* Main circle */}
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full float-anim" style={{ background: "linear-gradient(135deg, #C1E1C1, #D1B3E8)" }} />

              {/* Center robot image */}
              <div className="absolute inset-0 flex items-center justify-center float-anim">
                <img
                  src="https://cdn.poehali.dev/projects/26448a97-ef11-4ace-b89e-d8c4fba6dde2/bucket/c644a69e-0028-4659-b91f-aad66027dc67.png"
                  alt="Робот"
                  className="w-72 h-72 object-contain drop-shadow-xl"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3 float-anim-2 text-2xl wiggle">
                💻
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-3 float-anim text-2xl">
                ⚙️
              </div>
              <div className="absolute top-1/2 -right-8 bg-white rounded-2xl shadow-lg p-3 float-anim-2 text-2xl">
                🎮
              </div>
              <div className="absolute top-1/4 -left-8 bg-white rounded-2xl shadow-lg p-3 float-anim text-2xl">
                🔬
              </div>
            </div>

            {/* Code snippet decoration */}
            <div className="absolute bottom-0 right-0 bg-white rounded-2xl shadow-lg p-4 max-w-44 text-xs font-mono text-[#B280D0]">
              <div className="text-gray-400">// junior.py</div>
              <div><span className="text-[#4a9a4a]">print</span>(<span className="text-orange-500">"Hello!"</span>)</div>
              <div><span className="text-[#4a9a4a]">build</span>(robot=<span className="text-blue-500">True</span>)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

export default JuniorHero