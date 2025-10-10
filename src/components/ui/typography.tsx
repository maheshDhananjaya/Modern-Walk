import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva(
  "text-foreground transition-colors data-[slot=typography]",
  {
    variants: {
      variant: {
        h1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
        h2: "text-3xl leading-none font-bold tracking-[0%]",
        h3: "text-2xl font-semibold tracking-tight",
        h4: "text-xl font-semibold tracking-tight",
        h5: "text-lg font-semibold tracking-tight",
        h6: "text-base font-semibold tracking-tight",
        small: "text-xs font-medium leading-none",
        base: "text-base font-inter font-normal weight-normal",
        p: "leading-7 [&:not(:first-child)]:mt-6",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      color: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        destructive: "text-destructive",
        primary: "text-primary",
        secondary: "text-secondary-foreground",
      },
      lineHeight: {
        none: "leading-none",
        tight: "leading-tight",
        snug: "leading-snug",
        normal: "leading-normal",
        relaxed: "leading-relaxed",
        loose: "leading-loose",
      },
    },
    defaultVariants: {
      variant: "p",
      align: "left",
      weight: "normal",
      color: "default",
      lineHeight: "normal",
    },
  }
);

function Typography({
  className,
  asChild = false,
  variant,
  align,
  weight,
  color,
  lineHeight,
  ...props
}: React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : variant?.startsWith("h") ? variant : "p";

  return (
    <Comp
      data-slot="typography"
      className={cn(
        typographyVariants({
          variant,
          align,
          weight,
          color,
          lineHeight,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Typography, typographyVariants };
