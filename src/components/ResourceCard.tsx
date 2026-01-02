import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ResourceCardProps {
  title: string
  description: string
  image: string
  category: string
  url: string
  featured?: boolean
}

export function ResourceCard({ title, description, image, category, url, featured }: ResourceCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group relative flex flex-col rounded-xl border border-border bg-bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1',
        featured && 'border-coral-200 dark:border-coral-800/50 shadow-md'
      )}
    >
      {featured && (
        <div className="absolute top-4 right-4 px-2 py-1 rounded bg-coral-100 dark:bg-coral-900/30 text-coral-600 dark:text-coral-400 text-xs font-medium">
          Featured
        </div>
      )}

      {/* Icon/Image Placeholder */}
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocean-100 to-ocean-200 dark:from-ocean-800 dark:to-ocean-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <span className="text-2xl">📚</span>
      </div>

      <div className="flex-1">
        <span className="inline-block px-2 py-1 rounded bg-bg-secondary text-xs font-medium text-fg-muted mb-3">
          {category}
        </span>
        <h3 className="font-display text-lg font-medium mb-2 group-hover:text-coral-500 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-fg-muted line-clamp-3">
          {description}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-fg-muted group-hover:text-accent transition-colors">
        <span>Read more</span>
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </a>
  )
}
