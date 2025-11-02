import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white selection:bg-fuchsia-400/40 selection:text-white">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-500/10 via-cyan-400/10 to-purple-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
