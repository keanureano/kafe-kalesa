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

export default function HeroCarousel() {
  const images = [hero1, hero2, hero3];
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
      className="h-72 md:h-auto md:w-1/3"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image}
              alt={`Hero ${index + 1}`}
              className="object-cover h-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="stroke-secondary bg-primary-foreground border-secondary" />
      <CarouselNext className="stroke-secondary bg-primary-foreground border-secondary" />
    </Carousel>
  );
}
