import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const statusBadgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      status: {
        active: "bg-[#C6A24A]/15 text-[#C6A24A] border border-[#C6A24A]/30",
        limited: "bg-[#9B7830]/15 text-[#9B7830] border border-[#9B7830]/30",
        "firm-specific": "bg-[#5B7BA5]/15 text-[#8EAAD0] border border-[#5B7BA5]/30",
        watchlist: "bg-[#7B6BA5]/15 text-[#A89BD0] border border-[#7B6BA5]/30",
        paused: "bg-[#9CA3AF]/30 text-[#6B7280] border border-[#9CA3AF]/40",
        closed: "bg-[#B85C5C]/15 text-[#B85C5C] border border-[#B85C5C]/30",
      },
    },
    defaultVariants: {
      status: "active",
    },
  }
)

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> {
  status: "active" | "limited" | "firm-specific" | "watchlist" | "paused" | "closed"
}

function StatusBadge({ className, status, ...props }: StatusBadgeProps) {
  return (
    <div className={cn(statusBadgeVariants({ status }), className)} {...props}>
      {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
    </div>
  )
}

export { StatusBadge, statusBadgeVariants }
