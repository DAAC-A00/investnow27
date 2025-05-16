'use client'
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils" 

// Material Design 3 Button Styles (Dark Theme)
const buttonVariants = cva(
  // Base style: Common to all buttons
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-150 ease-in-out ",
  {
    variants: {
      variant: {
        // Filled Button (Primary Action)
        default: 
          "bg-sky-500 text-neutral-950 hover:bg-sky-600 disabled:bg-neutral-700 disabled:text-neutral-500",
        // Outlined Button
        outline: 
          "border border-neutral-600 text-sky-400 hover:bg-sky-400/10 hover:border-sky-400 disabled:border-neutral-700 disabled:text-neutral-500",
        // Text Button
        ghost: 
          "text-sky-400 hover:bg-sky-400/10 disabled:text-neutral-500",
        // Elevated Button (using secondary as base)
        secondary: 
          "bg-neutral-800 text-sky-400 hover:bg-neutral-700/80 shadow-md disabled:bg-neutral-800/50 disabled:text-neutral-500",
        // Tonal Button (can be a new variant or adapt an existing one)
        tonal: 
          "bg-sky-700/30 text-sky-200 hover:bg-sky-700/40 disabled:bg-neutral-800/50 disabled:text-neutral-500", 
        destructive: // Destructive Filled Button
          "bg-red-600 text-white hover:bg-red-700 disabled:bg-neutral-700 disabled:text-neutral-500",
        link: // Link style (typically for inline text links, not standalone buttons)
          "text-sky-400 underline-offset-4 hover:underline hover:text-sky-300",
      },
      size: {
        // MD3: Height for buttons is typically 40dp (h-10)
        default: "h-10 px-6 py-2", // Label text: 14sp (text-sm)
        sm: "h-8 px-4 rounded-full", // Smaller buttons like icon buttons or compact ones
        lg: "h-12 px-8 py-3 text-base", // Larger call to action
        icon: "size-10 rounded-full flex items-center justify-center", // For Icon Buttons
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Focus-visible states for Material Design (can be added to base or per variant)
// Example: focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950
// Add to base: "... focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-950"

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  // Add common focus visible style to all buttons
  const focusClasses = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-950";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }), focusClasses)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
