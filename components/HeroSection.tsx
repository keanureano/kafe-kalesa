import { Container } from "./ui/container";
import { H1, H3, H4, P } from "./ui/typography";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import HeroCarousel from "./HeroCarousel";

export default function HeroSection() {
  return (
    <Container className="bg-primary-foreground text-secondary">
      <div className="flex flex-col items-center gap-10 md:justify-center md:flex-row-reverse md:py-24">
        <HeroCarousel />
        <HeroContent />
      </div>
    </Container>
  );
}

function HeroContent() {
  return (
    <div className="md:w-1/2">
      <H1 className="text-balance">Where Every Brew, Feels Like Home</H1>
      <P>
        Welcome to Kafe Kalesa, where every brew feels like home. Our expertly
        crafted coffee and cozy atmosphere invite you to relax, unwind, and make
        every moment a little brighter.
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
      <div className="flex gap-4 pb-4 text-center md:pb-0">
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
  );
}
