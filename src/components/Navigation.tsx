import { createFileRoute, Link } from '@tanstack/react-router'
import { Menu, X, Github, Sun, Moon, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { siteConfig } from '@/lib/config'
import { useTheme } from '@/lib/theme'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-pink-200/30 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-3">
          {/* Logo with Avatar */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-blue-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img
                src="/avatar.png"
                alt="Seashore Lab Mascot"
                className="relative w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-lg group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
              <span className="text-xs text-fg-muted/70 flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-pink-400" />
                AI Agent Framework
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {siteConfig.navigation.map((item) => (
              <div key={item.label} className="relative group">
                {'items' in item ? (
                  <>
                    <button className="text-sm font-semibold text-fg-muted hover:text-pink-500 transition-all py-2 px-3 rounded-full hover:bg-pink-50">
                      {item.label}
                    </button>
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="w-64 rounded-2xl bg-white border-2 border-pink-100 shadow-xl shadow-pink-500/10 p-2">
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.url}
                            className="block px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50 transition-all"
                          >
                            <div className="font-semibold text-sm">{subItem.label}</div>
                            {subItem.description && (
                              <div className="text-xs text-fg-muted mt-1">{subItem.description}</div>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.url}
                    className="text-sm font-semibold text-fg-muted hover:text-pink-500 transition-all py-2 px-3 rounded-full hover:bg-pink-50"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-blue-100 hover:from-pink-200 hover:to-blue-200 transition-all text-pink-500"
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
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-blue-100 hover:from-pink-200 hover:to-blue-200 transition-all text-pink-500"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-blue-100 hover:from-pink-200 hover:to-blue-200 transition-all text-pink-500"
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
        <div className="md:hidden border-t border-pink-100 bg-white/95 backdrop-blur-xl">
          <div className="px-4 py-6 space-y-4">
            {siteConfig.navigation.map((item) => (
              <div key={item.label}>
                {'items' in item ? (
                  <div className="space-y-3">
                    <div className="font-bold text-sm text-fg-muted">{item.label}</div>
                    <div className="pl-4 space-y-2">
                      {item.items?.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.url}
                          className="block py-3 text-sm bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl px-4"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="font-semibold">{subItem.label}</div>
                          {subItem.description && (
                            <div className="text-xs text-fg-muted mt-1">{subItem.description}</div>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.url}
                    className="block py-3 text-sm font-semibold text-fg-muted hover:text-pink-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-pink-100 flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-blue-100 text-pink-500"
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
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-blue-100 text-pink-500"
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
