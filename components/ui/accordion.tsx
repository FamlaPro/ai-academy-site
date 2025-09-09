"use client";
import * as React from "react";

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  collapsible?: boolean;
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
}

interface AccordionContentProps {
  children: React.ReactNode;
}

const AccordionContext = React.createContext<{
  openItems: Set<string>;
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
  collapsible: boolean;
}>({
  openItems: new Set(),
  toggleItem: () => {},
  type: "single",
  collapsible: true,
});

const AccordionItemContext = React.createContext<{
  value: string;
  isOpen: boolean;
}>({
  value: "",
  isOpen: false,
});

export function Accordion({
  children,
  type = "single",
  collapsible = true,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set());

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItems((prev) => {
        const newSet = new Set(prev);

        if (type === "single") {
          if (newSet.has(value)) {
            if (collapsible) {
              newSet.delete(value);
            }
          } else {
            newSet.clear();
            newSet.add(value);
          }
        } else {
          if (newSet.has(value)) {
            newSet.delete(value);
          } else {
            newSet.add(value);
          }
        }

        return newSet;
      });
    },
    [type, collapsible]
  );

  return (
    <AccordionContext.Provider
      value={{ openItems, toggleItem, type, collapsible }}
    >
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ children, value }: AccordionItemProps) {
  const { openItems } = React.useContext(AccordionContext);
  const isOpen = openItems.has(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className="border border-gray-200 rounded-xl">{children}</div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({ children }: AccordionTriggerProps) {
  const { toggleItem } = React.useContext(AccordionContext);
  const { value, isOpen } = React.useContext(AccordionItemContext);

  return (
    <button
      onClick={() => toggleItem(value)}
      className="w-full text-left px-4 py-3 font-medium flex justify-between items-center hover:bg-gray-50 transition-colors"
    >
      <span>{children}</span>
      <span className="ml-4 text-lg">{isOpen ? "−" : "+"}</span>
    </button>
  );
}

export function AccordionContent({ children }: AccordionContentProps) {
  const { isOpen } = React.useContext(AccordionItemContext);

  if (!isOpen) return null;

  return <div className="px-4 pb-4 text-gray-700">{children}</div>;
}
