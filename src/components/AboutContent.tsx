import { aboutContent } from '@/lib/config'
import ReactMarkdown from 'react-markdown'

export function AboutContent() {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="font-display text-4xl sm:text-5xl font-medium mb-8">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-display text-2xl sm:text-3xl font-medium mt-12 mb-6">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-display text-xl sm:text-2xl font-medium mt-8 mb-4">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-fg-muted leading-relaxed mb-6">{children}</p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-fg">{children}</strong>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-coral-500 hover:text-coral-600 underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="space-y-3 mb-6">{children}</ul>
          ),
          li: ({ children }) => (
            <li className="flex items-start gap-3">
              <span className="text-coral-500 mt-1">•</span>
              <span>{children}</span>
            </li>
          ),
          hr: () => (
            <hr className="my-12 border-border" />
          ),
          code: ({ children }) => (
            <code className="px-2 py-1 rounded bg-bg-secondary text-fg font-code text-sm">
              {children}
            </code>
          ),
        }}
      >
        {aboutContent}
      </ReactMarkdown>
    </article>
  )
}
