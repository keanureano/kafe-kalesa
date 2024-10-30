import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

export const metadata: Metadata = {
  title: "Kafe Kalesa",
  description:
    "Kafe Kalesa is a cozy coffee shop in Batangas, Philippines. Enjoy a warm ambiance and friendly service while savoring locally sourced flavors.",
};

const font = Bodoni_Moda({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
