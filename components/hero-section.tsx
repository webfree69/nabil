"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Server, Shield, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Sécuriser le présent, architecturer le futur."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Decorative data center visual */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="w-8 h-24 bg-neon-blue/30 rounded animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/5 mb-8">
            <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
            <span className="font-mono text-xs text-neon-green">SYSTEM ONLINE</span>
          </div>

          {/* Main title */}
          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">NABIL</span>
            <span className="text-neon-blue"> // </span>
            <span className="text-neon-blue text-glow-blue">SYSTEMS ARCHITECT</span>
          </h1>

          {/* Subtitle with typing effect */}
          <div className="h-12 flex items-center justify-center mb-8">
            <p className="font-mono text-lg md:text-xl text-muted-foreground">
              <span className="text-neon-green">{">"}</span> {displayText}
              <span className="animate-pulse text-neon-blue">_</span>
            </p>
          </div>

          {/* Role badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded border border-border hover:border-neon-blue/50 transition-colors group">
              <Server className="w-4 h-4 text-neon-blue group-hover:text-neon-green transition-colors" />
              <span className="font-mono text-xs text-muted-foreground">INFRASTRUCTURE</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded border border-border hover:border-neon-blue/50 transition-colors group">
              <Shield className="w-4 h-4 text-neon-violet group-hover:text-neon-green transition-colors" />
              <span className="font-mono text-xs text-muted-foreground">SECURITY</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded border border-border hover:border-neon-blue/50 transition-colors group">
              <Cpu className="w-4 h-4 text-neon-green group-hover:text-neon-blue transition-colors" />
              <span className="font-mono text-xs text-muted-foreground">AUTOMATION</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="font-mono bg-neon-blue hover:bg-neon-blue/80 text-background glow-blue">
              <a href="#projects">
                <span className="mr-2">{">"}</span> VOIR LES OPÉRATIONS
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="font-mono border-neon-green text-neon-green hover:bg-neon-green/10 hover:text-neon-green bg-transparent"
            >
              <a href="#contact">
                <span className="mr-2">$</span> INIT_CONTACT
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-neon-blue/50" />
        </div>
      </div>
    </section>
  )
}
