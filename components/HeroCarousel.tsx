"use client";
import Image from "next/image";
import hero1 from "@/public/hero1.png";
import hero2 from "@/public/hero2.png";
import hero3 from "@/public/hero3.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const heroItems = [hero1, hero2, hero3];
export default function HeroCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{
        loop: true,
      }}
      className="p-4 md:p-0 md:h-auto md:w-1/3"
    >
      <CarouselContent>
        {heroItems.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image}
              alt={`Hero ${index + 1}`}
              className="object-cover h-full aspect-square md:aspect-auto"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden stroke-secondary bg-primary-foreground border-secondary md:flex" />
      <CarouselNext className="hidden stroke-secondary bg-primary-foreground border-secondary md:flex" />
    </Carousel>
  );
}
