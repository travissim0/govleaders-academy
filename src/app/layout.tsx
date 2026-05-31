import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://govleadersacademy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "GovLeaders Academy | Online Training for Public-Sector Leaders",
    template: "%s | GovLeaders Academy",
  },
  description:
    "Practical online training, resources, and development solutions for public-sector leaders, board members, special districts, water districts, and local government professionals.",
  keywords: [
    "public sector training",
    "special district training",
    "water district board training",
    "MUD board training",
    "WCID training",
    "Texas local government training",
    "public sector leadership training",
    "board member training",
    "public governance training",
    "local government professional development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GovLeaders Academy",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={raleway.variable}>
        <body className="min-h-screen flex flex-col antialiased">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          {process.env.NEXT_PUBLIC_GA_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
                }}
              />
            </>
          )}
        </body>
      </html>
    </ClerkProvider>
  );
}
