<script setup lang="ts">
import { Github, MessageSquare, Mail, X } from 'lucide-vue-next'

const iconMap = {
  github: Github,
  'message-square': MessageSquare,
  x: X,
}

const siteConfig = {
  description: 'TypeScript AI Agent Development Framework',
  footer: {
    email: 'hello@seashore.ai',
    copyright: '© 2025 Seashore Lab. All rights reserved.',
    links: [
      { label: 'GitHub', url: 'https://github.com/seashore-lab', icon: 'github' },
      { label: 'Discord', url: 'https://discord.gg/seashore', icon: 'message-square' },
      { label: 'X', url: 'https://x.com/seashore_ai', icon: 'x' },
    ],
  },
}
</script>

<template>
  <footer class="border-t border-border bg-bg-secondary mt-auto">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-coral-400 to-coral-600">
              <span class="text-lg font-bold text-white">S</span>
            </div>
            <span class="font-display text-xl font-medium">Seashore</span>
          </div>
          <p class="text-sm text-fg-muted max-w-xs">
            {{ siteConfig.description }}
          </p>
        </div>

        <!-- Contact -->
        <div class="space-y-4">
          <h3 class="font-display font-medium">Connect</h3>
          <a
            :href="`mailto:${siteConfig.footer.email}`"
            class="flex items-center gap-2 text-sm text-fg-muted hover:text-fg transition-colors"
          >
            <Mail :size="16" />
            {{ siteConfig.footer.email }}
          </a>
        </div>

        <!-- Social Links -->
        <div class="space-y-4">
          <h3 class="font-display font-medium">Follow Us</h3>
          <div class="flex gap-4">
            <a
              v-for="link in siteConfig.footer.links"
              :key="link.label"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover:bg-bg-secondary hover:border-coral-400 transition-all"
              :aria-label="link.label"
            >
              <component :is="iconMap[link.icon as keyof typeof iconMap]" :size="16" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-border text-center text-sm text-fg-muted">
        {{ siteConfig.footer.copyright }}
      </div>
    </div>
  </footer>
</template>
