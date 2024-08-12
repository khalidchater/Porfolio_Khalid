import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full bg-primary border border-white/60  rounded-xl p-3 focus:border-[#FF4C4C] outline-none ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
