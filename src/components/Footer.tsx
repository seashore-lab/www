import { siteConfig } from '@/lib/config'
import { Github, MessageSquare, Mail, X } from 'lucide-react'

const iconMap = {
  github: Github,
  'message-square': MessageSquare,
  x: X,
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-coral-400 to-coral-600">
                <span className="text-lg font-bold text-white">S</span>
              </div>
              <span className="font-display text-xl font-medium">Seashore</span>
            </div>
            <p className="text-sm text-fg-muted max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-medium">Connect</h3>
            <a
              href={`mailto:${siteConfig.footer.email}`}
              className="flex items-center gap-2 text-sm text-fg-muted hover:text-fg transition-colors"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.footer.email}
            </a>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-display font-medium">Follow Us</h3>
            <div className="flex gap-4">
              {siteConfig.footer.links.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap]
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover:bg-bg-secondary hover:border-coral-400 transition-all"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-fg-muted">
          {siteConfig.footer.copyright}
        </div>
      </div>
    </footer>
  )
}
