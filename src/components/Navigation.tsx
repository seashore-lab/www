import { createFileRoute, Link } from '@tanstack/react-router'
import { Menu, X, Github, Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { siteConfig } from '@/lib/config'
import { useTheme } from '@/lib/theme'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-bg/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-coral-400 to-coral-600">
              <span className="text-lg font-bold text-white">S</span>
            </div>
            <span className="font-display text-xl font-medium">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {siteConfig.navigation.map((item) => (
              <div key={item.label} className="relative group">
                {'items' in item ? (
                  <>
                    <button className="text-sm font-medium text-fg-muted hover:text-fg transition-colors py-2">
                      {item.label}
                    </button>
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="w-64 rounded-lg bg-bg-card border border-border shadow-lg p-2">
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.url}
                            className="block px-3 py-2 rounded-md hover:bg-bg-secondary transition-colors"
                          >
                            <div className="font-medium text-sm">{subItem.label}</div>
                            {subItem.description && (
                              <div className="text-xs text-fg-muted mt-0.5">{subItem.description}</div>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.url}
                    className="text-sm font-medium text-fg-muted hover:text-fg transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg hover:bg-bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>

            {/* GitHub Link */}
            <a
              href={siteConfig.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg hover:bg-bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg hover:bg-bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-bg">
          <div className="px-4 py-4 space-y-3">
            {siteConfig.navigation.map((item) => (
              <div key={item.label}>
                {'items' in item ? (
                  <div className="space-y-2">
                    <div className="font-medium text-sm text-fg-muted">{item.label}</div>
                    <div className="pl-4 space-y-2">
                      {item.items?.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.url}
                          className="block py-2 text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="font-medium">{subItem.label}</div>
                          {subItem.description && (
                            <div className="text-xs text-fg-muted mt-0.5">{subItem.description}</div>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.url}
                    className="block py-2 text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-3 border-t border-border flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-bg-secondary transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </button>
              <a
                href={siteConfig.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
