import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Container } from "./ui/container";
import { twMerge } from "tailwind-merge";
import { H4, P } from "./ui/typography";

export default function ContactSection() {
  return (
    <Container className="bg-primary-foreground text-accent">
      <Carousel
        className="w-full select-none md:cursor-move"
        opts={{ loop: true }}
      >
        <CarouselContent className="inline md:flex">
          <CarouselItems />
          <CarouselItems className="hidden md:inline" />
        </CarouselContent>
      </Carousel>
    </Container>
  );
}

function CarouselItems({ className }: { className?: string }) {
  return (
    <>
      <CarouselItem className={twMerge("basis-1/3", className)}>
        <P>Enjoy the warm atmosphere at Kafe Kalesa.</P>
      </CarouselItem>
      <CarouselItem className={twMerge("basis-1/3", className)}>
        <H4>Contact Us</H4>
      </CarouselItem>
      <CarouselItem className={twMerge("basis-1/3", className)}>
        <H4>Follow Us</H4>
      </CarouselItem>
    </>
  );
}
