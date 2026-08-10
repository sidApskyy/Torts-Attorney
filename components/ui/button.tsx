import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[#202124] text-[#FFFFFF] hover:bg-[#30343A] border border-[#E4E1D8] shadow-[0_4px_16px_rgba(32,33,36,0.05)] hover:shadow-[0_10px_30px_rgba(32,33,36,0.07)] hover:-translate-y-0.5",
        red: "bg-gradient-to-r from-[#B89542] to-[#D8BC72] text-[#FFFFFF] hover:from-[#9B7830] hover:to-[#C6A24A] shadow-[0_4px_14px_rgba(198,162,74,0.16)] hover:shadow-[0_10px_30px_rgba(198,162,74,0.20)] hover:-translate-y-0.5 btn-glow-emerald border border-[rgba(198,162,74,0.4)]",
        "red-outline": "border-[#C6A24A] text-[#9B7830] hover:bg-[#C6A24A]/10 shadow-sm hover:shadow-[0_8px_24px_rgba(198,162,74,0.10)] hover:-translate-y-0.5",
        gold: "bg-gradient-to-r from-[#B89542] to-[#D8BC72] text-[#FFFFFF] hover:from-[#9B7830] hover:to-[#C6A24A] shadow-[0_4px_14px_rgba(198,162,74,0.16)] hover:shadow-[0_10px_30px_rgba(198,162,74,0.20)] hover:-translate-y-0.5 btn-glow-gold border border-[rgba(198,162,74,0.4)]",
        "gold-outline": "border-[#C6A24A] text-[#9B7830] hover:bg-[#C6A24A]/10 shadow-sm hover:shadow-[0_8px_24px_rgba(198,162,74,0.10)] hover:-translate-y-0.5",
        "dark-secondary": "bg-[rgba(255,255,255,0.80)] backdrop-blur-xl text-[#202124] border-[#E4E1D8] hover:bg-[rgba(255,255,255,0.95)] hover:border-[#C6A24A]/45 hover:text-[#9B7830] shadow-[0_4px_16px_rgba(32,33,36,0.05)] hover:shadow-[0_10px_30px_rgba(32,33,36,0.07)] hover:-translate-y-0.5",
        outline:
          "border-[#E4E1D8] bg-[rgba(255,255,255,0.80)] backdrop-blur-xl text-[#202124] hover:bg-[rgba(255,255,255,0.95)] hover:border-[#C6A24A]/45 hover:text-[#9B7830] shadow-[0_4px_16px_rgba(32,33,36,0.05)] hover:shadow-[0_10px_30px_rgba(32,33,36,0.07)] hover:-translate-y-0.5",
        secondary:
          "bg-[#ECEFF2] text-[#202124] hover:bg-[#E4E1D8] border border-[#D5D0C4] shadow-[0_4px_16px_rgba(32,33,36,0.05)] hover:-translate-y-0.5",
        ghost:
          "hover:bg-[#ECEFF2] hover:text-[#202124]",
        destructive:
          "bg-[#B85C5C]/10 text-[#B85C5C] hover:bg-[#B85C5C]/20 focus-visible:border-[#B85C5C]/40 focus-visible:ring-[#B85C5C]/20",
        link: "text-[#9B7830] underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-11 gap-1.5 px-5 sm:h-10 sm:px-4 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-8 gap-1 rounded-full px-3 text-xs sm:h-7 sm:px-2.5 in-data-[slot=button-group]:rounded-full has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1 rounded-full px-4 text-[0.8rem] sm:h-8 sm:px-3 in-data-[slot=button-group]:rounded-full has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-13 gap-1.5 px-7 sm:h-12 sm:px-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-11 sm:size-10",
        "icon-xs":
          "size-8 rounded-full sm:size-7 in-data-[slot=button-group]:rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-9 rounded-full sm:size-8 in-data-[slot=button-group]:rounded-full",
        "icon-lg": "size-13 sm:size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
