import { useState } from 'react'
import { examples } from '@/lib/config'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Examples() {
  const [activeTab, setActiveTab] = useState(examples[0].id)
  const [copied, setCopied] = useState(false)

  const activeExample = examples.find(e => e.id === activeTab) || examples[0]

  const handleCopy = () => {
    navigator.clipboard.writeText(activeExample.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-medium mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-fg-muted max-w-2xl mx-auto">
            From simple agents to complex workflows — seashore makes it easy to build production-ready AI systems.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {examples.map((example) => (
              <button
                key={example.id}
                onClick={() => setActiveTab(example.id)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                  activeTab === example.id
                    ? 'bg-accent text-accent-fg shadow-md'
                    : 'bg-bg-card text-fg-muted hover:text-fg border border-border'
                )}
              >
                {example.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-bg-card rounded-xl border border-border overflow-hidden shadow-xl">
            {/* Header */}
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl font-medium">{activeExample.title}</h3>
                <p className="text-sm text-fg-muted mt-1">{activeExample.description}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-bg-secondary text-xs font-medium text-fg-muted">
                {activeExample.category}
              </span>
            </div>

            {/* Code Block */}
            <div className="relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-bg-secondary hover:bg-bg transition-colors"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-sage-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
              <pre className="p-6 overflow-x-auto bg-code-bg text-code-fg text-sm">
                <code>{activeExample.code}</code>
              </pre>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <a
              href="https://docs.seashore.ai/examples"
              className="inline-flex items-center gap-2 text-fg-muted hover:text-fg transition-colors font-medium"
            >
              View all examples →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
