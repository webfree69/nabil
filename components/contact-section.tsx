"use client"

import type React from "react"

import { useState } from "react"
import { Send, Terminal, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type FormStatus = "idle" | "sending" | "success" | "error"

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("sending")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setFormStatus("success")

    // Reset after 3 seconds
    setTimeout(() => {
      setFormStatus("idle")
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded border border-neon-green/30 bg-neon-green/5 mb-4">
            <Terminal className="w-4 h-4 text-neon-green" />
            <span className="font-mono text-xs text-neon-green">SECURE CHANNEL</span>
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground">
            TERMINAL<span className="text-neon-green text-glow-green"> CONTACT</span>
          </h2>
        </div>

        {/* Contact terminal */}
        <Card className="max-w-2xl mx-auto bg-card border-2 border-neon-green/30 overflow-hidden">
          {/* Terminal header */}
          <div className="px-6 py-3 border-b border-border bg-secondary flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-chart-4" />
              <div className="w-3 h-3 rounded-full bg-neon-green" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">contact@nabil.sys</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="font-mono text-xs text-neon-green">ENCRYPTED</span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-6 md:p-8">
            {/* Terminal output */}
            <div className="font-mono text-sm text-muted-foreground mb-6 space-y-1">
              <p>
                <span className="text-neon-green">$</span> init secure_channel
              </p>
              <p>
                <span className="text-neon-blue">{">"}</span> Connexion établie...
              </p>
              <p>
                <span className="text-neon-blue">{">"}</span> Canal sécurisé prêt.
              </p>
              <p className="text-neon-green">{">"} En attente de message..._</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-neon-blue">
                    <span className="text-muted-foreground">// </span>IDENTIFIER
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="font-mono bg-secondary border-border focus:border-neon-green focus:ring-neon-green/20 placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-neon-blue">
                    <span className="text-muted-foreground">// </span>EMAIL_ADDR
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                    className="font-mono bg-secondary border-border focus:border-neon-green focus:ring-neon-green/20 placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-neon-blue">
                  <span className="text-muted-foreground">// </span>SUBJECT_LINE
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Objet du message"
                  required
                  className="font-mono bg-secondary border-border focus:border-neon-green focus:ring-neon-green/20 placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-neon-blue">
                  <span className="text-muted-foreground">// </span>MESSAGE_BODY
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  rows={5}
                  required
                  className="font-mono bg-secondary border-border focus:border-neon-green focus:ring-neon-green/20 resize-none placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={formStatus === "sending" || formStatus === "success"}
                className={cn(
                  "w-full font-mono transition-all duration-300",
                  formStatus === "success"
                    ? "bg-neon-green hover:bg-neon-green text-background"
                    : "bg-neon-blue hover:bg-neon-blue/80 text-background glow-blue",
                )}
              >
                {formStatus === "idle" && (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    <span>SEND_MESSAGE</span>
                  </>
                )}
                {formStatus === "sending" && (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    <span>TRANSMITTING...</span>
                  </>
                )}
                {formStatus === "success" && (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>MESSAGE_SENT</span>
                  </>
                )}
                {formStatus === "error" && (
                  <>
                    <AlertCircle className="w-4 h-4 mr-2" />
                    <span>ERROR_RETRY</span>
                  </>
                )}
              </Button>
            </form>

            {/* Status message */}
            {formStatus === "success" && (
              <div className="mt-4 p-4 bg-neon-green/10 border border-neon-green/30 rounded">
                <p className="font-mono text-sm text-neon-green">
                  <span className="text-neon-green">{">"}</span> Message transmis avec succès. Réponse sous 24h.
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}
