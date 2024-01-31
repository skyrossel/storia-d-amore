import type { Metadata } from "next";
import "@/styles/globals.css";

import ModalProvider from "@/providers/modal-provider";
import { fontSans } from "@/lib/font";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Storia D'amore | Chapter 1",
  description: "Reyhanagazi & Acceptmycondolences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>
        <main className="relative flex-[1_0_auto]">{children}</main>
        <Footer />
        <ModalProvider />
      </body>
    </html>
  );
}
