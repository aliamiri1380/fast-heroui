"use client"

import { Accordion, AccordionItem } from "@heroui/accordion";
import Circle from "./circle";
import { filter_keys } from "./utils";
import Icon from "./icon";

export default function App({items=[], ...props}) {
  const motion = {
    variants: {
      enter: {
        y: 0,
        opacity: 1,
        height: "auto",
        transition: {
          height: {
            type: "spring",
            stiffness: 500,
            damping: 30,
            duration: 1,
          },
          opacity: {
            easings: "ease",
            duration: 1,
          },
        },
      },
      exit: {
        y: -10,
        opacity: 0,
        height: 0,
        transition: {
          height: {
            easings: "ease",
            duration: 0.25,
          },
          opacity: {
            easings: "ease",
            duration: 0.3,
          },
        },
      },
    },
  }
  return (
    <div className="my-4 accordion">
      <Accordion motionProps={motion}  {...props} className="text-sm">
        {items.map((r, i) => <AccordionItem 
          classNames={{
            'trigger': 'w-fit',
            'indicator': '!rotate-[0deg] data-[open=true]:!rotate-[-90deg]',
            'content': 'overflow-hidden transition-all duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
          }} 
          key={i} 
          className="leading-[2pc]" 
          {...(filter_keys(r, ['content']))} 
          startContent={r.circle ? <Circle {...r.circle} /> : ''} 
          title={<label className={`font-bold text-lg ${props.denseIndicator ? 'w-fit' : ''}`}>{r.title}</label>}
        >
          {r.content}
        </AccordionItem>)}
      </Accordion>
    </div>
  );
}
