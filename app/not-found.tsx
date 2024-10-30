import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H2, P } from "@/components/ui/typography";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="min-h-[90dvh] bg-primary-foreground text-primary py-32 text-center">
      <H2>404 - Coffee Not Found</H2>
      <P>Uh-oh! The page you're looking for seems to have disappeared.</P>
      <P>
        Don't worry, you can still check out our menu or return to the homepage.
      </P>
      <Link href="/">
        <Button className="mt-8">Back to Homepage</Button>
      </Link>
    </Container>
  );
}
