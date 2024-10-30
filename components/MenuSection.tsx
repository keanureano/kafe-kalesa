import Image from "next/image";
import { Container } from "./ui/container";
import { H1, H2, P } from "./ui/typography";
import menu1 from "@/public/menu1.png";
import menu2 from "@/public/menu2.png";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

const menuItems = [
  {
    image: menu1,
    title: "Signature Latte",
    description:
      "Savor our Signature Latte, a perfect blend of rich espresso and steamed milk, topped with velvety foam. A hint of vanilla adds sweetness, making it an indulgent treat for any time of day.",
  },
  {
    image: menu2,
    title: "Barako Cold Brew",
    description:
      "Enjoy our Barako Cold Brew, made from premium Batangas coffee beans. Slowly steeped for a smooth flavor with low acidity, it's served over ice with a splash of coconut milk for a refreshing twist on iced coffee.",
    reversed: true,
  },
];

export default function MenuSection() {
  return (
    <Container className="bg-primary">
      <div className="md:px-8">
        <H1>Best Sellers</H1>
      </div>
      <div className="flex flex-col gap-16 pt-8 md:items-center">
        {menuItems.map((item, index) => (
          <div
            className={clsx(
              "flex flex-col gap-4 md:justify-center items-center md:gap-8",
              item.reversed ? "md:flex-row-reverse" : "md:flex-row"
            )}
            key={index}
          >
            <div className="-rotate-3 md:w-96">
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover transition scale-90 shadow-sm cursor-pointer aspect-square hover:scale-95 hover:rotate-3 hover:shadow-lg"
              />
            </div>
            <div className="md:w-1/3">
              <H2>{item.title}</H2>
              <P>{item.description}</P>
              <Button className="mt-8 bg-primary-foreground outline-secondary text-secondary hover:bg-primary-foreground/80">
                View All
                <ArrowRight />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
