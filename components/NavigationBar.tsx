import Image from "next/image";
import { Container } from "./ui/container";
import logo from "@/public/logo.png";
import { H3 } from "./ui/typography";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import clsx from "clsx";

const linkItems = [
  { href: "/", title: "Home", hideOnMobile: true },
  { href: "/about", title: "About" },
  { href: "/menu", title: "Menu" },
  { href: "/contact", title: "Contact" },
];
export default function NavigationBar() {
  return (
    <Container className="bg-primary-foreground text-primary">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <div className="flex gap-2 group">
            <Image src={logo} alt="Logo" className="size-8" />
            <H3 className="hidden md:inline group-hover:underline">
              Kafe Kalesa
            </H3>
          </div>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {linkItems.map((item) => (
              <NavigationMenuItem
                key={item.href}
                className={clsx(item?.hideOnMobile && "hidden md:inline")}
              >
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </Container>
  );
}
