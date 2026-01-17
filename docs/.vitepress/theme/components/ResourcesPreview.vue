<script setup lang="ts">
import { resources } from '../lib/config'

const featuredResources = resources.filter(r => r.featured).slice(0, 3)
</script>

<template>
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between mb-12">
        <div>
          <h2 class="font-display text-3xl sm:text-4xl font-medium mb-4">
            Resources
          </h2>
          <p class="text-lg text-fg-muted max-w-2xl">
            Guides, tutorials, and best practices to help you build amazing AI agents.
          </p>
        </div>
        <a
          href="/resources"
          class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-bg-secondary transition-colors font-medium"
        >
          View all resources →
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ResourceCard
          v-for="resource in featuredResources"
          :key="resource.id"
          v-bind="resource"
        />
      </div>

      <div class="mt-8 text-center sm:hidden">
        <a
          href="/resources"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-bg-secondary transition-colors font-medium"
        >
          View all resources →
        </a>
      </div>
    </div>
  </section>
</template>
