import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function DownloaderFaq({
  faqs,
}: {
  faqs: {
    title: string;
    answer: string;
  }[];
}) {
  return (
    <div className="mx-auto w-full">
      <h2 className="text-lg font-semibold">FAQS</h2>
      <Accordion type="single" collapsible className="grid w-full">
        {faqs.map((faq) => (
          <AccordionItem value={faq.title} key={faq.title}>
            <AccordionTrigger>{faq.title}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default DownloaderFaq;
