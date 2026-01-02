import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 wave-pattern opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-50/50 via-bg to-bg" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="fade-in-up stagger-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card border border-border shadow-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-coral-500" />
            </span>
            <span className="text-sm font-medium">Built on @tanstack/ai</span>
          </div>

          {/* Headline */}
          <h1 className="fade-in-up stagger-2 font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-6">
            TypeScript AI Agent
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-coral-500 to-coral-400">
              Development Framework
            </span>
          </h1>

          {/* Subheading */}
          <p className="fade-in-up stagger-3 text-lg sm:text-xl text-fg-muted max-w-2xl mx-auto mb-4">
            Build powerful, production-ready AI agents with type-safe tools, workflows,
            and RAG pipelines.
          </p>
          <p className="fade-in-up stagger-4 text-sm text-fg-muted/80 max-w-xl mx-auto mb-10">
            Not tied to Vercel or any SaaS ecosystem. Own your AI infrastructure.
          </p>

          {/* CTAs */}
          <div className="fade-in-up stagger-5 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://docs.seashore.ai"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-fg font-medium hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/seashore-lab/seashore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-bg-card hover:bg-bg-secondary transition-colors font-medium"
            >
              <span>View on GitHub</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Feature Pills */}
          <div className="fade-in-up stagger-5 mt-16 flex flex-wrap items-center justify-center gap-3">
            {[
              'ReAct Agents',
              'Tool System',
              'Workflows',
              'RAG',
              'Memory',
              'MCP',
              'GenUI',
            ].map((feature) => (
              <span
                key={feature}
                className="px-4 py-2 rounded-full bg-bg-card border border-border text-sm font-medium shadow-sm"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
