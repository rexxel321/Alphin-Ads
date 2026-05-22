import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQS_DATA = [
  {
    question: "What is the check-in and check-out time?",
    answer: "Check-in is from 3:00 PM, and check-out is until 11:00 AM.",
  },
  {
    question: "Is the hotel pet-friendly?",
    answer: "Yes, we welcome well-behaved pets. Please inform us in advance so we can prepare specialized amenities.",
  },
  {
    question: "Do you offer shuttle services?",
    answer: "Yes, we offer complimentary luxury shuttle transfers to and from the local train stations and airports. Private yacht transfers are also available upon request.",
  },
  {
    question: "Are lift passes included in the price?",
    answer: "Yes, during the winter season, premium ski-in/ski-out passes are included with all suite bookings.",
  },
  {
    question: "Is there a vegan option in the restaurant?",
    answer: "Absolutely. All our dining rooms, including the Michelin-starred terrace, offer fully curated plant-based and vegan 5-course menus daily.",
  }
];

export function Faq() {
  return (
    <section className="w-full bg-[#FAF9F6] h-auto md:h-[698px] py-20 px-4 md:pt-20 md:pb-[120px] md:px-12 font-sans text-zinc-900 border-b border-zinc-100 overflow-hidden" id="faq">
      
      {/* Mobile Layout */}
      <div className="flex flex-col items-center justify-start gap-[40px] w-full max-w-[358px] mx-auto md:hidden">
        
        {/* Header Block */}
        <div className="w-full text-center space-y-3">
          <h2 className="font-serif text-[28px] font-light tracking-tight text-zinc-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-zinc-500 font-light text-sm leading-relaxed max-w-[320px] mx-auto">
            Answers to the most common questions, so you can focus on enjoying your time with us.
          </p>
        </div>

        {/* Image Block */}
        <div className="w-full h-[240px] overflow-hidden rounded-none">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80" 
            alt="Luxury bed and pillows with cozy mood lighting"
            className="w-full h-full object-cover rounded-none"
          />
        </div>

        {/* Accordions Block */}
        <div className="w-full">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full flex flex-col gap-3">
            {FAQS_DATA.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-white border border-zinc-100 mb-0 rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.015)] overflow-hidden transition-all duration-300 hover:border-zinc-200"
              >
                <AccordionTrigger className="font-sans text-[14px] font-normal text-zinc-800 px-5 py-4 hover:no-underline hover:text-[#a29482] transition-colors focus:outline-none text-left [&>svg]:text-zinc-400 [&>svg]:stroke-[1.5] [&>svg]:size-[16px]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 text-zinc-500 font-light text-[13px] leading-relaxed pt-0 pr-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block mx-auto max-w-[1280px] h-full">
        {/* Responsive Grid Layout (Left side text & image, Right side FAQs) */}
        <div className="grid grid-cols-12 md:gap-20 items-start h-full">
          
          {/* Left Column: Heading, description, and sharp bed interior photo */}
          <div className="col-span-5 space-y-8 flex flex-col items-start text-left w-full">
            <div className="space-y-4">
              <h2 className="font-serif text-[42px] font-light tracking-tight text-zinc-900 leading-[1.1]">
                Frequently Asked Questions
              </h2>
              <p className="font-sans text-zinc-500 font-light text-[14.5px] leading-relaxed max-w-[400px]">
                Answers to the most common questions, so you can focus on enjoying your time with us.
              </p>
            </div>
            
            {/* Bed pillow interior image with sharp corners */}
            <div className="w-full">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80" 
                alt="Luxury bed and pillows with cozy mood lighting"
                className="w-full aspect-[16/10] object-cover rounded-none shadow-[0_4px_24px_rgba(0,0,0,0.01)]"
              />
            </div>
          </div>

          {/* Right Column: Custom white card Accordions */}
          <div className="col-span-7 w-full">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full flex flex-col gap-3">
              {FAQS_DATA.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="bg-white border border-zinc-100 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.015)] overflow-hidden transition-all duration-300 hover:border-zinc-200"
                >
                  <AccordionTrigger className="font-sans text-[15px] font-normal text-zinc-800 px-8 py-[22px] hover:no-underline hover:text-[#a29482] transition-colors focus:outline-none [&>svg]:text-zinc-400 [&>svg]:hover:text-[#a29482] [&>svg]:stroke-[1.5] [&>svg]:size-[18px] [&>svg]:transition-transform [&>svg]:duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-[22px] text-zinc-500 font-light text-[14px] leading-relaxed pt-0 pr-12">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>

    </section>
  );
}
