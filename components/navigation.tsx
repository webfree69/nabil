"use client"

import { useState, useEffect } from "react"
import { Menu, X, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "CORE", href: "#hero" },
  { label: "ACCRED", href: "#certification" },
  { label: "STACK", href: "#stack" },
  { label: "OPS", href: "#projects" },
  { label: "LINK", href: "#contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <Terminal className="w-6 h-6 text-neon-blue group-hover:text-neon-green transition-colors" />
            <span className="font-mono text-sm text-neon-blue group-hover:text-neon-green transition-colors">
              NABIL.SYS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 font-mono text-xs text-muted-foreground hover:text-neon-blue transition-colors group"
              >
                <span className="text-neon-green/50 mr-1">{String(index + 1).padStart(2, "0")}.</span>
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-neon-blue group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-neon-blue hover:text-neon-green hover:bg-neon-blue/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 font-mono text-sm text-muted-foreground hover:text-neon-blue hover:bg-neon-blue/10 rounded transition-colors"
                >
                  <span className="text-neon-green/50 mr-2">{String(index + 1).padStart(2, "0")}.</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
