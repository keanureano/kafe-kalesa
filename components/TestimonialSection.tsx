import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Container } from "./ui/container";
import { H1, H2, P } from "./ui/typography";

const testimonialItems = [
  {
    name: "Keanu Reaño",
    initials: "KR",
    rating: 9,
    message:
      "Kafe Kalesa offers an incredible selection of traditional Filipino coffee and delightful pastries. The ambiance is cozy, making it the perfect spot to relax or catch up with friends.",
  },
  {
    name: "Maria Santos",
    initials: "MS",
    rating: 8,
    message:
      "I love the warm and welcoming atmosphere at Kafe Kalesa. Their baristas are friendly, and the barako coffee is a must-try. It's a great place to enjoy a taste of home!",
  },
  {
    name: "Juan Dela Cruz",
    initials: "JD",
    rating: 10,
    message:
      "Kafe Kalesa has quickly become my favorite café! The quality of their coffee and the variety of Filipino snacks they offer is outstanding. Highly recommend for anyone looking for an authentic experience!",
  },
];

export default function TestimonialSection() {
  return (
    <Container className="bg-accent">
      <div className="flex justify-center pb-16 text-center">
        <H1>What Our Customers Say</H1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Accordion
          type="multiple"
          defaultValue={["item-1", "item-2", "item-3"]}
          className="text-center md:w-1/2 min-w-96"
        >
          {testimonialItems.map((item, index) => (
            <AccordionItem
              value={`item-${index + 1}`}
              key={index}
              className="border-none"
            >
              <AccordionTrigger className="flex justify-center w-full gap-8">
                <div>
                  <H2>{item.name}</H2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <P className="text-balance">{item.message}</P>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}
