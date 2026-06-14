import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { siteDescription, siteTitle } from "@/constants/metadata";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://newprofile.vercel.app"
  ),
  title: {
    default: siteTitle,
    template: "%s | Saif Mohamed Jamil",
  },
  description: siteDescription,
  keywords: [
    "Saif Mohamed Jamil",
    "Seaf Gamel",
    "Full-Stack Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "Ecommerce Developer",
    "API Developer",
  ],
  authors: [{ name: "Saif Mohamed Jamil" }],
  creator: "Saif Mohamed Jamil",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    images: [
      {
        url: "/images/seaf1.jpg",
        width: 960,
        height: 960,
        alt: "Saif Mohamed Jamil",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/seaf1.jpg"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Sidebar />
          <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
            <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
              {children}
              <Footer />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
