<script setup lang="ts">
import { ref } from 'vue'
import { Copy, Check } from 'lucide-vue-next'
import { examples } from '../lib/config'
import { cn } from '../utils/cn'

const activeTab = ref(examples[0].id)
const copied = ref(false)

const activeExample = examples.find(e => e.id === activeTab.value) || examples[0]

const handleCopy = async () => {
  await navigator.clipboard.writeText(activeExample.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <section class="py-24 bg-bg-secondary">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl sm:text-4xl font-medium mb-4">
          See It In Action
        </h2>
        <p class="text-lg text-fg-muted max-w-2xl mx-auto">
          From simple agents to complex workflows — seashore makes it easy to build production-ready AI systems.
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <!-- Tabs -->
        <div class="flex flex-wrap gap-2 mb-6 justify-center">
          <button
            v-for="example in examples"
            :key="example.id"
            @click="activeTab = example.id"
            :class="cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-all',
              activeTab === example.id
                ? 'bg-accent text-accent-fg shadow-md'
                : 'bg-bg-card text-fg-muted hover:text-fg border border-border'
            )"
          >
            {{ example.title }}
          </button>
        </div>

        <!-- Content -->
        <div class="bg-bg-card rounded-xl border border-border overflow-hidden shadow-xl">
          <!-- Header -->
          <div class="px-6 py-4 border-b border-border flex items-center justify-between">
            <div>
              <h3 class="font-display text-xl font-medium">{{ activeExample.title }}</h3>
              <p class="text-sm text-fg-muted mt-1">{{ activeExample.description }}</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-bg-secondary text-xs font-medium text-fg-muted">
              {{ activeExample.category }}
            </span>
          </div>

          <!-- Code Block -->
          <div class="relative">
            <div class="absolute top-4 right-4 flex gap-2">
              <button
                @click="handleCopy"
                class="p-2 rounded-lg bg-bg-secondary hover:bg-bg transition-colors"
                aria-label="Copy code"
              >
                <Check v-if="copied" :size="16" class="text-sage-500" />
                <Copy v-else :size="16" />
              </button>
            </div>
            <pre class="p-6 overflow-x-auto bg-code-bg text-code-fg text-sm"><code>{{ activeExample.code }}</code></pre>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-8 text-center">
          <a
            href="https://docs.seashore.ai/examples"
            class="inline-flex items-center gap-2 text-fg-muted hover:text-fg transition-colors font-medium"
          >
            View all examples →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
