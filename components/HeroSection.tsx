import Image from "next/image";
import { Container } from "./ui/container";
import { H1, H3, H4, P } from "./ui/typography";
import hero1 from "@/public/hero1.png";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
export default function HeroSection() {
  return (
    <Container className="px-4 py-10 bg-primary-foreground text-secondary">
      <div className="flex flex-col items-center md:justify-center gap-10 md:flex-row-reverse">
        <ImageCarousel />
        <div className="md:w-1/2">
          <H1 className="text-balance">Where Every Brew, Feels Like Home</H1>
          <P>
            Welcome to Kafe Kalesa, where every brew feels like home. Our
            expertly crafted coffee and cozy atmosphere invite you to relax,
            unwind, and make every moment a little brighter.
          </P>
          <div className="flex gap-2 pt-4 pb-8">
            <Button>
              Order Now
              <ArrowRight />
            </Button>
            <Button
              variant="outline"
              className="bg-primary-foreground border-secondary"
            >
              Learn More
            </Button>
          </div>
          <div className="flex gap-4 text-center">
            <div>
              <H3>10+</H3>
              <H4 className="text-sm">Coffee Varieties</H4>
            </div>
            <div>
              <H3>200+</H3>
              <H4 className="text-sm">Customer Reviews</H4>
            </div>
            <div>
              <H3>10k+</H3>
              <H4 className="text-sm">Cups Sold</H4>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function ImageCarousel() {
  return (
    <Image
      src={hero1}
      alt="hero1"
      className="object-contain h-72 md:h-auto md:w-1/3"
    />
  );
}
