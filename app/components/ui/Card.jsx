import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * @type {React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>}
 */
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "p-6 pb-4 relative",
      "bg-card text-card-foreground",
      "shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_var(--border)]",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

/**
 * @type {React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>}
 */
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-center flex-col space-y-1.5 px-6 h-8",
      "absolute -top-8 left-0 rounded-t-xl",
      "bg-secondary text-secondary-foreground",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/**
 * @type {React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>}
 */
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xl font-bold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/**
 * @type {React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>}
 */
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

/**
 * @type {React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>}
 */
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
CardContent.displayName = "CardContent";

/**
 * @type {React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>}
 */
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
