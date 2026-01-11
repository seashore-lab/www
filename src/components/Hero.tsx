import { ArrowRight, ExternalLink, Sparkles, Heart, Star } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function Hero() {
  const features = [
    'ReAct Agents',
    'Tool System',
    'Workflows',
    'RAG',
    'Memory',
    'MCP',
    'GenUI',
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 sparkle-pattern opacity-60" />
      <div className="absolute inset-0 wave-pattern opacity-[0.02]" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300/20 rounded-full blur-2xl float-anim" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl float-anim" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-300/20 rounded-full blur-2xl float-anim" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-pink-400/20 rounded-full blur-2xl float-anim" style={{ animationDelay: '0.5s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="bounce-in stagger-1 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-50 to-blue-50 border-2 border-pink-200 shadow-lg shadow-pink-500/10 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-pink-500 to-blue-500" />
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                Built on @tanstack/ai
              </span>
              <Sparkles className="h-4 w-4 text-pink-400" />
            </div>

            {/* Headline */}
            <h1 className="fade-in-up stagger-2 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block text-blue-900">TypeScript AI Agent</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mt-2">
                Development Framework
              </span>
            </h1>

            {/* Subheading */}
            <p className="fade-in-up stagger-3 text-lg sm:text-xl text-pink-700/80 max-w-xl mb-4 font-medium">
              Build powerful, production-ready AI agents with type-safe tools, workflows,
              and RAG pipelines.
            </p>
            <p className="fade-in-up stagger-4 text-sm text-blue-600/70 max-w-lg mb-10">
              Not tied to Vercel or any SaaS ecosystem. Own your AI infrastructure.
            </p>

            {/* CTAs */}
            <div className="fade-in-up stagger-5 flex flex-col sm:flex-row items-center gap-4 mb-12">
              <a
                href="https://docs.seashore.ai"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold hover:from-pink-600 hover:to-blue-600 transition-all shadow-xl shadow-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/40 hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/seashore-lab/seashore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-pink-200 bg-white hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50 transition-all font-semibold text-pink-600 hover:text-blue-600 shadow-md hover:shadow-lg"
              >
                <span>View on GitHub</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Feature Pills */}
            <div className="fade-in-up stagger-6 flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border-2 border-pink-100 text-sm font-semibold text-pink-600 shadow-sm hover:shadow-md hover:border-pink-200 transition-all cursor-default"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <Star className="h-3 w-3 text-pink-400 fill-pink-400" />
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Large Avatar Display */}
          <div className="relative flex justify-center items-center lg:justify-end">
            {/* Decorative circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 blur-3xl opacity-40 pulse-glow"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-pink-300 to-blue-300 blur-2xl opacity-30 wiggle-anim"></div>
            </div>

            {/* Avatar container */}
            <div className="relative bounce-in stagger-3">
              {/* Main avatar ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 blur-sm opacity-60 animate-spin" style={{ animationDuration: '8s' }}></div>

              {/* Avatar image */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full p-2 bg-white/80 backdrop-blur-sm shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner">
                  <img
                    src="/avatar.png"
                    alt="Seashore Lab Mascot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating hearts */}
              <div className="absolute -top-4 -right-4 text-pink-400 float-anim" style={{ animationDelay: '0.2s' }}>
                <Heart className="h-8 w-8 fill-pink-400 animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -left-6 text-blue-400 float-anim" style={{ animationDelay: '0.7s' }}>
                <Star className="h-6 w-6 fill-blue-400" />
              </div>
              <div className="absolute top-1/2 -right-8 text-purple-400 float-anim" style={{ animationDelay: '1.2s' }}>
                <Sparkles className="h-5 w-5 fill-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
    </section>
  )
}
