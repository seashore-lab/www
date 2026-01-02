import { resources } from '@/lib/config'
import { ResourceCard } from './ResourceCard'
import { Link } from '@tanstack/react-router'

export function ResourcesPreview() {
  const featuredResources = resources.filter(r => r.featured).slice(0, 3)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-medium mb-4">
              Resources
            </h2>
            <p className="text-lg text-fg-muted max-w-2xl">
              Guides, tutorials, and best practices to help you build amazing AI agents.
            </p>
          </div>
          <Link
            to="/resources"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-bg-secondary transition-colors font-medium"
          >
            View all resources →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredResources.map((resource) => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-bg-secondary transition-colors font-medium"
          >
            View all resources →
          </Link>
        </div>
      </div>
    </section>
  )
}
