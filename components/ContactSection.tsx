import dynamic from "next/dynamic";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Container } from "./ui/container";
import { H3, P } from "./ui/typography";
import clsx from "clsx";

export default function ContactSection() {
  return (
    <Container className="bg-primary-foreground text-accent">
      <Carousel
        className="w-full md:select-none md:cursor-move"
        opts={{ loop: true }}
      >
        <CarouselContent className="flex flex-col md:flex-row">
          <CarouselItems />
          <CarouselItems mobileHidden />
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center pt-8">
        <p>
          © {new Date().getFullYear().toString()} Keanu Reaño. All rights
          reserved.
        </p>
      </div>
    </Container>
  );
}

function CarouselItems({ mobileHidden }: { mobileHidden?: boolean }) {
  const Map = dynamic(() => import("@/components/ui/map"), { ssr: false });
  return (
    <>
      <CarouselItem
        className={clsx(
          "basis-1/3 p-8 md:p-16",
          mobileHidden && "hidden md:inline"
        )}
      >
        <H3>Contact Us</H3>
        <P>kafekalesa@example.com</P>
        <P>0800 123 4567</P>
        <P>+639 123 456789</P>
        <P>123 Fake Street, Batangas, PH</P>
      </CarouselItem>
      <CarouselItem
        className={clsx(
          "basis-1/3 p-8 md:p-16",
          mobileHidden && "hidden md:inline"
        )}
      >
        <H3>Follow Us</H3>
        <P className="hover:underline cursor-pointer">
          facebook.com/kafekalesa
        </P>
        <P className="hover:underline cursor-pointer">
          instagram.com/kafekalesa
        </P>
        <P className="hover:underline cursor-pointer">twitter.com/kafekalesa</P>
      </CarouselItem>
      <CarouselItem
        className={clsx(
          "basis-1/3 p-8 md:p-16",
          mobileHidden && "hidden md:inline"
        )}
      >
        <Map />
      </CarouselItem>
    </>
  );
}
