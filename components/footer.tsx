"use client"

import { Github, Linkedin, Mail, Terminal } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#contact", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-neon-blue" />
            <span className="font-mono text-sm text-muted-foreground">
              NABIL.SYS <span className="text-neon-blue">v1.0</span>
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="p-2 text-muted-foreground hover:text-neon-blue transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs text-muted-foreground text-center md:text-right">
            <p>© {new Date().getFullYear()} NABIL // SYSTEMS ARCHITECT</p>
            <p className="text-neon-green/50 mt-1">
              <span className="text-neon-green">{">"}</span> All systems operational
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
