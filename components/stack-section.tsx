"use client"

import { useState } from "react"
import { Cloud, Network, Code2, Database, Lock, Server, Wifi, Terminal } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const stackCategories = [
  {
    id: "infrastructure",
    title: "INFRASTRUCTURE",
    subtitle: "Cloud & M365",
    icon: Cloud,
    color: "neon-blue",
    items: [
      { name: "Microsoft 365", level: 95 },
      { name: "Azure AD", level: 90 },
      { name: "Exchange Online", level: 92 },
      { name: "SharePoint", level: 88 },
      { name: "Teams Admin", level: 90 },
      { name: "Intune", level: 85 },
    ],
  },
  {
    id: "network",
    title: "RÉSEAUX",
    subtitle: "Cisco & Security",
    icon: Network,
    color: "neon-violet",
    items: [
      { name: "Cisco IOS", level: 88 },
      { name: "Firewalls", level: 90 },
      { name: "VPN/IPSec", level: 85 },
      { name: "VLAN", level: 92 },
      { name: "DNS/DHCP", level: 95 },
      { name: "Load Balancing", level: 80 },
    ],
  },
  {
    id: "automation",
    title: "AUTOMATISATION",
    subtitle: "Scripts & Tools",
    icon: Code2,
    color: "neon-green",
    items: [
      { name: "PowerShell", level: 95 },
      { name: "Python", level: 85 },
      { name: "Bash", level: 82 },
      { name: "Graph API", level: 88 },
      { name: "Ansible", level: 75 },
      { name: "Terraform", level: 70 },
    ],
  },
]

const additionalTools = [
  { icon: Database, name: "SQL Server" },
  { icon: Lock, name: "Zero Trust" },
  { icon: Server, name: "Hyper-V" },
  { icon: Wifi, name: "WiFi 6" },
  { icon: Terminal, name: "CLI Tools" },
]

export default function StackSection() {
  const [activeCategory, setActiveCategory] = useState("infrastructure")

  return (
    <section id="stack" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded border border-neon-green/30 bg-neon-green/5 mb-4">
            <Terminal className="w-4 h-4 text-neon-green" />
            <span className="font-mono text-xs text-neon-green">ARSENAL TECHNIQUE</span>
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
            THE<span className="text-neon-green text-glow-green"> STACK</span>
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {stackCategories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded border font-mono text-sm transition-all duration-300",
                  isActive
                    ? `border-${category.color}/60 bg-${category.color}/10 text-${category.color}`
                    : "border-border bg-secondary text-muted-foreground hover:border-border/80",
                )}
                style={{
                  borderColor: isActive ? `var(--${category.color})` : undefined,
                  backgroundColor: isActive ? `var(--${category.color})10` : undefined,
                  color: isActive ? `var(--${category.color})` : undefined,
                }}
              >
                <Icon className="w-5 h-5" />
                <span>{category.title}</span>
              </button>
            )
          })}
        </div>

        {/* Stack grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stackCategories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id
            return (
              <Card
                key={category.id}
                className={cn(
                  "bg-card border transition-all duration-500 overflow-hidden",
                  isActive ? "border-2 scale-105" : "border-border opacity-60 hover:opacity-80",
                )}
                style={{
                  borderColor: isActive ? `var(--${category.color})` : undefined,
                  boxShadow: isActive ? `0 0 30px var(--glow-${category.color.replace("neon-", "")})` : undefined,
                }}
              >
                {/* Header */}
                <div className="px-6 py-4 border-b border-border bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6" style={{ color: `var(--${category.color})` }} />
                    <div>
                      <h3 className="font-mono text-sm font-bold" style={{ color: `var(--${category.color})` }}>
                        {category.title}
                      </h3>
                      <p className="font-mono text-xs text-muted-foreground">{category.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Skills list */}
                <div className="p-6 space-y-4">
                  {category.items.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-foreground">{item.name}</span>
                        <span className="font-mono text-xs text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: isActive ? `${item.level}%` : "0%",
                            backgroundColor: `var(--${category.color})`,
                            boxShadow: isActive ? `0 0 10px var(--${category.color})` : undefined,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Additional tools */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {additionalTools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-secondary rounded border border-border hover:border-neon-blue/50 transition-colors group"
              >
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-neon-blue transition-colors" />
                <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {tool.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
