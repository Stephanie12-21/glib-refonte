"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

interface CaptchaProps {
  onVerify: (verified: boolean) => void
  className?: string
}

export function Captcha({ onVerify, className }: CaptchaProps) {
  const [captchaText, setCaptchaText] = useState("")
  const [userInput, setUserInput] = useState("")
  const [isVerified, setIsVerified] = useState(false)
  const [error, setError] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const generateCaptcha = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Réinitialiser le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Générer un texte aléatoire de 6 caractères
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789"
    let captcha = ""
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setCaptchaText(captcha)

    // Dessiner le fond
    const isDarkMode = document.documentElement.classList.contains("dark")
    ctx.fillStyle = isDarkMode ? "#1e1e2f" : "#f5f5f7"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Ajouter du bruit (points)
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = isDarkMode
        ? `rgba(255, 255, 255, ${Math.random() * 0.3})`
        : `rgba(0, 0, 0, ${Math.random() * 0.3})`
      ctx.beginPath()
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 2, 0, Math.PI * 2)
      ctx.fill()
    }

    // Ajouter des lignes aléatoires
    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = isDarkMode
        ? `rgba(255, 255, 255, ${Math.random() * 0.5})`
        : `rgba(0, 0, 0, ${Math.random() * 0.5})`
      ctx.lineWidth = Math.random() * 2
      ctx.beginPath()
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height)
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height)
      ctx.stroke()
    }

    // Dessiner le texte
    ctx.font = "bold 24px Arial"
    ctx.fillStyle = isDarkMode ? "#a78bfa" : "#7c3aed"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    // Dessiner chaque caractère avec une rotation et position légèrement différente
    for (let i = 0; i < captcha.length; i++) {
      const x = 20 + i * 25
      const y = canvas.height / 2 + (Math.random() * 10 - 5)
      const rotation = Math.random() * 0.4 - 0.2

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.fillText(captcha[i], 0, 0)
      ctx.restore()
    }
  }

  const verifyCaptcha = () => {
    if (userInput.toLowerCase() === captchaText.toLowerCase()) {
      setIsVerified(true)
      setError(false)
      onVerify(true)
    } else {
      setError(true)
      onVerify(false)
      generateCaptcha()
      setUserInput("")
    }
  }

  const refreshCaptcha = () => {
    setUserInput("")
    setError(false)
    generateCaptcha()
  }

  // Générer le captcha au chargement et lors du changement de thème
  useEffect(() => {
    generateCaptcha()

    // Observer les changements de thème
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          generateCaptcha()
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className={cn("space-y-4", className)}>
      <div className="space-y-2">
        <Label htmlFor="captcha">Vérification de sécurité</Label>
        <div className="flex items-center gap-2">
          <canvas ref={canvasRef} width={180} height={60} className="rounded-md border" />
          <Button type="button" variant="outline" size="icon" onClick={refreshCaptcha} className="flex-shrink-0">
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Rafraîchir le captcha</span>
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="captcha-input" className={error ? "text-destructive" : ""}>
          Saisissez le texte ci-dessus
          {error && <span className="ml-2 text-destructive">Texte incorrect, veuillez réessayer</span>}
        </Label>
        <div className="flex gap-2">
          <Input
            id="captcha-input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className={cn("bg-background/50", error && "border-destructive focus-visible:ring-destructive")}
            disabled={isVerified}
          />
          <Button
            type="button"
            onClick={verifyCaptcha}
            disabled={!userInput || isVerified}
            className={cn(
              "flex-shrink-0",
              isVerified ? "bg-green-600 hover:bg-green-700" : "bg-primary hover:bg-primary/90",
            )}
          >
            {isVerified ? "Vérifié" : "Vérifier"}
          </Button>
        </div>
      </div>
    </div>
  )
}

