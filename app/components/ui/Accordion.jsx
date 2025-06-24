"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 *
 * @param {React.ComponentProps<typeof AccordionPrimitive.Root>} param0
 * @returns
 */
function Accordion({ className, ...props }) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("border-y", className)}
      {...props}
    />
  );
}

/**
 *
 * @param {React.ComponentProps<typeof AccordionPrimitive.Item>} param0
 * @returns
 */
function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

/**
 *
 * @param {React.ComponentProps<typeof AccordionPrimitive.Trigger> & { asLink: string }} param0
 * @returns
 */
function AccordionTrigger({ className, children, asLink, ...props }) {
  const [update, setUpdate] = React.useState(0)
  const Wrapper = !!asLink ? Link : React.Fragment;
  const wrapperProps = !!asLink
    ? {
        href: asLink,
        onClick: (e) => {
          e.preventDefault();
          e.stopPropagation();
          setUpdate(prev => prev + 1)
        },
      }
    : {};

  React.useEffect(() => {
    const accordionHeader = document.getElementById(props.id)
    const isOpen = accordionHeader.dataset.state === "open"
    if(!!update && isOpen) {
      const tIdx = setTimeout(() => {
        accordionHeader.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 300)

      return(() => clearTimeout(tIdx))
    }
  }, [update])

  return (
    <Wrapper {...wrapperProps}>
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          data-slot="accordion-trigger"
          className={cn(
            "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-lg font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
            className
          )}
          {...props}
          id={props.id || undefined}
        >
          {children}
          <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    </Wrapper>
  );
}

/**
 *
 * @param {React.ComponentProps<typeof AccordionPrimitive.Content>} param0
 * @returns
 */
function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
