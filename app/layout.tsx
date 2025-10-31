import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "YieldGuard - Safe DeFi Yields",
  description: "Sleep easy while your crypto earns — vetted vaults, zero guesswork",
  openGraph: {
    title: "YieldGuard",
    description: "Sleep easy while your crypto earns — vetted vaults, zero guesswork",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
