import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faq } from "@/types/type";
import BallAnimation from "../sharable/BallAnimation";

export default function Acc({ data, i }: { data: Faq; i: number }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        className="border-border overflow-hidden relative border p-2 rounded-lg"
        value="item-1">
        <BallAnimation
          x={i % 2 !== 0 ? "right-2 text-blue-500" : "-left-2"}
          y={"top-0"}
          w={"w-20"}
          h={"h-20"}
          blur="blur-xl"
        />
        <AccordionTrigger className="font-semibold  gap-2">
          {i + 1}- {data.question}
        </AccordionTrigger>
        <AccordionContent className="bg-accent leading-[2] p-4 rounded-lg ">
          {data.answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
