import { createFileRoute } from '@tanstack/react-router'
import { resources } from '@/lib/config'
import { ResourceCard } from '@/components/ResourceCard'

export const Route = createFileRoute('/resources')({
  component: ResourcesComponent,
})

function ResourcesComponent() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-medium mb-6">
            Resources
          </h1>
          <p className="text-xl text-fg-muted max-w-2xl mx-auto">
            Guides, tutorials, and best practices to help you build amazing AI agents with Seashore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </div>
      </div>
    </div>
  )
}
