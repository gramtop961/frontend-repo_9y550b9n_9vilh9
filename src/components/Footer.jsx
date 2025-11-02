export default function Footer() {
  return (
    <footer id="about" className="relative mt-10 border-t border-white/10 bg-slate-950/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-amber-400" />
          <div>
            <div className="font-semibold">AI Ads Club</div>
            <div className="text-xs text-white/60">Futuristic. Minimal. Powerful.</div>
          </div>
        </div>
        <div className="text-sm text-white/60">
          © {new Date().getFullYear()} AI Ads Club. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
