'use client';
import * as React from 'react';

export function Accordion({ children }:{children: React.ReactNode}){
  return <div className="space-y-2">{children}</div>;
}
export function AccordionItem({ children }:{children: React.ReactNode}){
  return <div className="border border-gray-200 rounded-xl">{children}</div>;
}
export function AccordionTrigger({ children }:{children: React.ReactNode}){
  const [open, setOpen] = React.useState(false);
  return (
    <button onClick={() => setOpen(!open)} className="w-full text-left px-4 py-3 font-medium flex justify-between items-center">
      <span>{children}</span><span className="ml-4">{open ? "−" : "+"}</span>
    </button>
  );
}
export function AccordionContent({ children }:{children: React.ReactNode}){
  return <div className="px-4 pb-4 text-gray-700">{children}</div>;
}
