"use client"

import { useState } from "react"
import { Folder, CheckCircle, Clock, AlertTriangle, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ProjectStatus = "completed" | "in-progress" | "planned"

interface Project {
  id: string
  codename: string
  title: string
  description: string
  status: ProjectStatus
  progress: number
  tech: string[]
  stats: { label: string; value: string }[]
}

const projects: Project[] = [
  {
    id: "op-001",
    codename: "EXODUS",
    title: "Migration Cloud M365",
    description:
      "Migration complète de l'infrastructure Exchange On-Premise vers Microsoft 365 pour une entreprise de 500+ utilisateurs.",
    status: "completed",
    progress: 100,
    tech: ["Exchange Online", "Azure AD", "PowerShell", "Hybrid Config"],
    stats: [
      { label: "Utilisateurs", value: "500+" },
      { label: "Mailboxes", value: "450" },
      { label: "Downtime", value: "0h" },
    ],
  },
  {
    id: "op-002",
    codename: "AEGIS",
    title: "Déploiement Zero Trust",
    description:
      "Implémentation d'une architecture Zero Trust avec Conditional Access et MFA pour sécuriser les accès entreprise.",
    status: "completed",
    progress: 100,
    tech: ["Azure AD", "Intune", "Conditional Access", "MFA"],
    stats: [
      { label: "Policies", value: "25+" },
      { label: "Devices", value: "800" },
      { label: "Compliance", value: "99.8%" },
    ],
  },
  {
    id: "op-003",
    codename: "NEXUS",
    title: "Refonte Réseau Datacenter",
    description:
      "Modernisation complète de l'infrastructure réseau datacenter avec segmentation VLAN et haute disponibilité.",
    status: "completed",
    progress: 100,
    tech: ["Cisco", "VLAN", "Firewalls", "Load Balancer"],
    stats: [
      { label: "Switches", value: "32" },
      { label: "VLANs", value: "15" },
      { label: "Uptime", value: "99.99%" },
    ],
  },
  {
    id: "op-004",
    codename: "AUTOMATON",
    title: "Automatisation IT Operations",
    description:
      "Développement de scripts PowerShell et Python pour automatiser les tâches d'administration récurrentes.",
    status: "in-progress",
    progress: 75,
    tech: ["PowerShell", "Python", "Graph API", "Azure Functions"],
    stats: [
      { label: "Scripts", value: "50+" },
      { label: "Heures/mois", value: "-120h" },
      { label: "Erreurs", value: "-95%" },
    ],
  },
]

const statusConfig = {
  completed: {
    icon: CheckCircle,
    label: "COMPLETED",
    color: "text-neon-green",
    bgColor: "bg-neon-green/10",
    borderColor: "border-neon-green/30",
  },
  "in-progress": {
    icon: Clock,
    label: "IN PROGRESS",
    color: "text-neon-blue",
    bgColor: "bg-neon-blue/10",
    borderColor: "border-neon-blue/30",
  },
  planned: {
    icon: AlertTriangle,
    label: "PLANNED",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    borderColor: "border-chart-4/30",
  },
}

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded border border-neon-blue/30 bg-neon-blue/5 mb-4">
            <Folder className="w-4 h-4 text-neon-blue" />
            <span className="font-mono text-xs text-neon-blue">MISSION LOGS</span>
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
            PROJECT<span className="text-neon-blue text-glow-blue"> LOGS</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => {
            const status = statusConfig[project.status]
            const StatusIcon = status.icon
            const isHovered = hoveredProject === project.id

            return (
              <Card
                key={project.id}
                className={cn(
                  "bg-card border border-border overflow-hidden transition-all duration-300 group",
                  isHovered && "border-neon-blue/50",
                )}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Header bar */}
                <div className="px-6 py-3 border-b border-border bg-secondary/50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-muted-foreground">{project.id.toUpperCase()}</span>
                    <span className="font-mono text-sm text-neon-violet font-bold">{project.codename}</span>
                  </div>
                  <div
                    className={cn(
                      "flex items-center gap-2 px-3 py-1 rounded text-xs font-mono",
                      status.bgColor,
                      status.borderColor,
                      "border",
                    )}
                  >
                    <StatusIcon className={cn("w-3 h-3", status.color)} />
                    <span className={status.color}>{status.label}</span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Title and description */}
                  <h3 className="font-mono text-lg font-bold text-foreground mb-2 group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-xs text-muted-foreground">PROGRESS</span>
                      <span className="font-mono text-xs text-neon-green">{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-neon-green rounded-full transition-all duration-700"
                        style={{
                          width: `${project.progress}%`,
                          boxShadow: "0 0 10px var(--neon-green)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-secondary rounded border border-border font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {project.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="font-mono text-lg font-bold text-neon-blue">{stat.value}</div>
                        <div className="font-mono text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="font-mono border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 group bg-transparent"
          >
            <span>VIEW ALL OPERATIONS</span>
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
