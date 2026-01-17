import { ref, onMounted } from 'vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')
const isInitialized = ref(false)

export function useTheme() {
  const toggleTheme = () => {
    const newTheme = theme.value === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(newTheme)
      localStorage.setItem('theme', newTheme)
    }
  }

  const initTheme = () => {
    if (isInitialized.value) return

    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initialTheme = (stored === 'light' || stored === 'dark') ? stored as Theme : (prefersDark ? 'dark' : 'light')

      setTheme(initialTheme)
      isInitialized.value = true
    }
  }

  onMounted(() => {
    initTheme()
  })

  return {
    theme,
    toggleTheme,
    setTheme,
    initTheme,
  }
}
