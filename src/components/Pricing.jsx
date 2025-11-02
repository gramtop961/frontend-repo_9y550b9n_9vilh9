export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-3 text-white/70">
          Start free. Upgrade when you&apos;re ready to scale.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Starter */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-xl font-semibold">Starter</h3>
              <p className="mt-1 text-sm text-white/70">For individual creators testing ideas.</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">Free</div>
              <div className="text-xs text-white/60">No credit card required</div>
            </div>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-white/80">
            <li>• 5 campaigns per month</li>
            <li>• Basic analytics</li>
            <li>• Community support</li>
          </ul>
          <a href="#get-started" className="mt-8 inline-block rounded-full border border-white/20 bg-white/5 px-5 py-2 font-medium hover:bg-white/10">
            Get started
          </a>
        </div>

        {/* Pro */}
        <div className="relative overflow-hidden rounded-2xl border border-fuchsia-400/30 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-amber-400/10 p-8">
          <div className="flex items-end justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-xs text-fuchsia-200">
                Popular
              </div>
              <h3 className="mt-3 text-xl font-semibold">Pro</h3>
              <p className="mt-1 text-sm text-white/80">For teams that need scale and control.</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">$49</div>
              <div className="text-xs text-white/60">per user / month</div>
            </div>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-white/90">
            <li>• Unlimited campaigns</li>
            <li>• Advanced insights & reporting</li>
            <li>• Roles & permissions</li>
            <li>• Priority support</li>
          </ul>
          <a href="#get-started" className="mt-8 inline-block rounded-full bg-white px-5 py-2 font-medium text-slate-900 shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40">
            Start Pro trial
          </a>
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-fuchsia-400/20 to-amber-300/20 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
