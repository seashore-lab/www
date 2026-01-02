import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/Hero'
import { Examples } from '@/components/Examples'
import { ResourcesPreview } from '@/components/ResourcesPreview'

export const Route = createFileRoute('/__index')({
  component: IndexComponent,
})

function IndexComponent() {
  return (
    <>
      <Hero />
      <Examples />
      <ResourcesPreview />
    </>
  )
}
