<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, Github, Sun, Moon, Sparkles } from 'lucide-vue-next'
import { useTheme } from '../composables/useTheme'
import { cn } from '../utils/cn'

const { theme, toggleTheme } = useTheme()
const mobileMenuOpen = ref(false)

const siteConfig = {
  name: 'Seashore Lab',
  repo: 'https://github.com/seashore-lab/seashore',
  navigation: [
    {
      label: 'Products',
      items: [
        {
          label: 'seashore',
          description: 'Modular TypeScript Agent Framework',
          url: 'https://github.com/seashore-lab/seashore',
        },
      ],
    },
    {
      label: 'Docs',
      url: 'https://docs.seashore.ai',
    },
    {
      label: 'Resources',
      url: '/resources',
    },
    {
      label: 'About',
      url: '/about',
    },
  ],
}
</script>

<template>
  <nav class="sticky top-0 z-50 w-full border-b border-pink-200/30 bg-white/80 backdrop-blur-xl">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-18 items-center justify-between py-3">
        <!-- Logo with Avatar -->
        <a href="/" class="flex items-center gap-3 group">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-400 to-blue-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <img
              src="/avatar.png"
              alt="Seashore Lab Mascot"
              class="relative w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-lg group-hover:scale-110 transition-transform"
            />
          </div>
          <div class="flex flex-col">
            <span class="font-display text-xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              {{ siteConfig.name }}
            </span>
            <span class="text-xs text-fg-muted/70 flex items-center gap-1">
              <Sparkles :size="12" class="text-pink-400" />
              AI Agent Framework
            </span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:items-center md:gap-6">
          <template v-for="item in siteConfig.navigation" :key="item.label">
            <div class="relative group">
              <template v-if="'items' in item">
                <button class="text-sm font-semibold text-fg-muted hover:text-pink-500 transition-all py-2 px-3 rounded-full hover:bg-pink-50">
                  {{ item.label }}
                </button>
                <div class="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div class="w-64 rounded-2xl bg-white border-2 border-pink-100 shadow-xl shadow-pink-500/10 p-2">
                    <a
                      v-for="subItem in item.items"
                      :key="subItem.label"
                      :href="subItem.url"
                      class="block px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50 transition-all"
                    >
                      <div class="font-semibold text-sm">{{ subItem.label }}</div>
                      <div v-if="subItem.description" class="text-xs text-fg-muted mt-1">
                        {{ subItem.description }}
                      </div>
                    </a>
                  </div>
                </div>
              </template>
              <template v-else>
                <a
                  :href="item.url"
                  class="text-sm font-semibold text-fg-muted hover:text-pink-500 transition-all py-2 px-3 rounded-full hover:bg-pink-50"
                >
                  {{ item.label }}
                </a>
              </template>
            </div>
          </template>
        </div>

        <!-- Right Side -->
        <div class="flex items-center gap-3">
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-blue-100 hover:from-pink-200 hover:to-blue-200 transition-all text-pink-500"
            aria-label="Toggle theme"
          >
            <Sun v-if="theme === 'light'" :size="16" />
            <Moon v-else :size="16" />
          </button>

          <!-- GitHub Link -->
          <a
            :href="siteConfig.repo"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-blue-100 hover:from-pink-200 hover:to-blue-200 transition-all text-pink-500"
            aria-label="GitHub"
          >
            <Github :size="16" />
          </a>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-blue-100 hover:from-pink-200 hover:to-blue-200 transition-all text-pink-500"
            aria-label="Toggle menu"
          >
            <X v-if="mobileMenuOpen" :size="20" />
            <Menu v-else :size="20" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden border-t border-pink-100 bg-white/95 backdrop-blur-xl">
      <div class="px-4 py-6 space-y-4">
        <template v-for="item in siteConfig.navigation" :key="item.label">
          <div v-if="'items' in item" class="space-y-3">
            <div class="font-bold text-sm text-fg-muted">{{ item.label }}</div>
            <div class="pl-4 space-y-2">
              <a
                v-for="subItem in item.items"
                :key="subItem.label"
                :href="subItem.url"
                class="block py-3 text-sm bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl px-4"
                @click="mobileMenuOpen = false"
              >
                <div class="font-semibold">{{ subItem.label }}</div>
                <div v-if="subItem.description" class="text-xs text-fg-muted mt-1">
                  {{ subItem.description }}
                </div>
              </a>
            </div>
          </div>
          <a
            v-else
            :href="item.url"
            class="block py-3 text-sm font-semibold text-fg-muted hover:text-pink-500"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </a>
        </template>

        <div class="pt-4 border-t border-pink-100 flex items-center gap-3">
          <button
            @click="toggleTheme"
            class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-blue-100 text-pink-500"
            aria-label="Toggle theme"
          >
            <Sun v-if="theme === 'light'" :size="16" />
            <Moon v-else :size="16" />
          </button>
          <a
            :href="siteConfig.repo"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-blue-100 text-pink-500"
            aria-label="GitHub"
          >
            <Github :size="16" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
