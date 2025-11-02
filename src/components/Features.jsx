import { Rocket, Mic, Globe, Shield } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Launch campaigns in minutes',
    desc: 'Generate, preview, and deploy high‑converting ads with guided AI workflows.',
  },
  {
    icon: Mic,
    title: 'AI voice agent',
    desc: 'Converse naturally to plan strategy, create assets, and optimize on the fly.',
  },
  {
    icon: Globe,
    title: 'Omnichannel ready',
    desc: 'Ship assets across major ad networks with consistent brand safety and tracking.',
  },
  {
    icon: Shield,
    title: 'Privacy & compliance',
    desc: 'Enterprise‑grade security, audit logs, and granular role permissions out of the box.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Built for modern growth teams</h2>
        <p className="mt-3 text-white/70">
          Everything you need to ideate, create, launch, and scale ads with confidence.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform hover:-translate-y-1"
          >
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-amber-400/20 text-fuchsia-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-amber-400/10 blur-2xl transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  )
}
