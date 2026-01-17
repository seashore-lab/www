import DefaultTheme from 'vitepress/theme-without-fonts'
import type { Theme } from 'vitepress'
import './styles/custom.css'
import './styles/tailwind.css'

import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import Examples from './components/Examples.vue'
import ResourcesPreview from './components/ResourcesPreview.vue'
import ResourceCard from './components/ResourceCard.vue'

const theme: Theme = {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    // Register global components
    app.component('Navigation', Navigation)
    app.component('Footer', Footer)
    app.component('Hero', Hero)
    app.component('Examples', Examples)
    app.component('ResourcesPreview', ResourcesPreview)
    app.component('ResourceCard', ResourceCard)
  },
}

export default theme
