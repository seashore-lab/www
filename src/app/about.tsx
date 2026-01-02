import { createFileRoute } from '@tanstack/react-router'
import { AboutContent } from '@/components/AboutContent'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AboutContent />
      </div>
    </div>
  )
}
