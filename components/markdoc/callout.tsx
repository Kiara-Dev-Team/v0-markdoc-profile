import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle, Info } from "lucide-react"

interface CalloutProps {
  type?: "note" | "warning" | "success"
  children: ReactNode
}

export function Callout({ type = "note", children }: CalloutProps) {
  const icons = {
    note: Info,
    warning: AlertCircle,
    success: CheckCircle,
  }

  const Icon = icons[type]

  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-lg border p-4",
        type === "note" && "border-primary/50 bg-primary/5",
        type === "warning" && "border-destructive/50 bg-destructive/5",
        type === "success" && "border-secondary/50 bg-secondary/5",
      )}
    >
      <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
      <div className="flex-1">{children}</div>
    </div>
  )
}
