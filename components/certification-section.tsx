"use client"

import { Award, CheckCircle2, Shield, Star } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function CertificationSection() {
  return (
    <section id="certification" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded border border-neon-violet/30 bg-neon-violet/5 mb-4">
            <Award className="w-4 h-4 text-neon-violet" />
            <span className="font-mono text-xs text-neon-violet">ACCRÉDITATION DE NIVEAU SYSTÈME</span>
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
            CERTIFICATION<span className="text-neon-violet text-glow-violet"> SPOTLIGHT</span>
          </h2>
        </div>

        {/* Main certification card */}
        <Card className="max-w-4xl mx-auto bg-card border-2 border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-500 overflow-hidden group">
          {/* Header bar */}
          <div className="bg-secondary px-6 py-3 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-chart-4" />
              <div className="w-3 h-3 rounded-full bg-neon-green" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">certification.sys</span>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Badge visual */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-neon-blue/20 blur-xl animate-pulse" />

                  {/* Badge container */}
                  <div className="relative w-48 h-48 rounded-full border-4 border-neon-blue glow-blue flex items-center justify-center bg-background">
                    <div className="text-center">
                      <Shield className="w-16 h-16 text-neon-blue mx-auto mb-2" />
                      <div className="font-mono text-xs text-neon-blue">MICROSOFT</div>
                      <div className="font-mono text-[10px] text-muted-foreground">365 EXPERT</div>
                    </div>
                  </div>

                  {/* Floating stars */}
                  <Star className="absolute -top-2 -right-2 w-6 h-6 text-chart-4 fill-chart-4 animate-float" />
                  <Star
                    className="absolute -bottom-2 -left-2 w-4 h-4 text-neon-green fill-neon-green animate-float"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </div>

              {/* Certification details */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-mono text-xl md:text-2xl font-bold text-foreground mb-2">
                    Microsoft 365 Certified:
                  </h3>
                  <p className="font-mono text-lg text-neon-blue text-glow-blue">Enterprise Administrator Expert</p>
                </div>

                <div className="space-y-3">
                  {[
                    "Administration Microsoft 365 avancée",
                    "Gestion des identités et accès",
                    "Sécurité et conformité entreprise",
                    "Déploiement et migration cloud",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 group/item">
                      <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0" />
                      <span className="font-mono text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Status badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-neon-green/10 border border-neon-green/30">
                  <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                  <span className="font-mono text-xs text-neon-green">CERTIFIED // VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
