<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { cn } from '../utils/cn'

interface ResourceCardProps {
  title: string
  description: string
  image: string
  category: string
  url: string
  featured?: boolean
}
defineProps<ResourceCardProps>()
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    :class="
      cn(
        'group relative flex flex-col rounded-xl border border-border bg-bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1',
        featured && 'border-coral-200 dark:border-coral-800/50 shadow-md',
      )
    "
  >
    <div
      v-if="featured"
      class="absolute top-4 right-4 px-2 py-1 rounded bg-coral-100 dark:bg-coral-900/30 text-coral-600 dark:text-coral-400 text-xs font-medium"
    >
      Featured
    </div>

    <!-- Icon/Image Placeholder -->
    <div
      class="w-12 h-12 rounded-lg bg-gradient-to-br from-ocean-100 to-ocean-200 dark:from-ocean-800 dark:to-ocean-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
    >
      <span class="text-2xl">📚</span>
    </div>

    <div class="flex-1">
      <span
        class="inline-block px-2 py-1 rounded bg-bg-secondary text-xs font-medium text-fg-muted mb-3"
      >
        {{ category }}
      </span>
      <h3
        class="font-display text-lg font-medium mb-2 group-hover:text-coral-500 transition-colors"
      >
        {{ title }}
      </h3>
      <p class="text-sm text-fg-muted line-clamp-3">
        {{ description }}
      </p>
    </div>

    <div
      class="mt-4 flex items-center gap-2 text-sm font-medium text-fg-muted group-hover:text-accent transition-colors"
    >
      <span>Read more</span>
      <ArrowUpRight :size="16" />
    </div>
  </a>
</template>
