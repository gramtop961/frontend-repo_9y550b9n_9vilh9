import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-16 md:pt-24">
      <div className="relative grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-amber-300 animate-pulse" />
            Next‑gen AI Ads Platform
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Grow faster with an AI voice agent for ads
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Automate campaign creation, analyze performance, and scale results with a
            futuristic, minimal interface designed to convert.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#get-started"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-500 to-amber-400 px-5 py-2.5 font-medium text-slate-900 shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-[1.02]"
            >
              Start free
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-medium text-white/90 backdrop-blur hover:bg-white/10"
            >
              Live demo
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-xs text-white/60">
            <div>
              <span className="font-semibold text-white">10k+</span> marketers joined
            </div>
            <div>GDPR friendly • SOC2 ready</div>
          </div>
        </div>

        <div className="relative h-[420px] w-full md:h-[560px]">
          {/* Spline Scene */}
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* Soft radial highlight overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_60%)]" />
        </div>
      </div>
    </section>
  )
}
