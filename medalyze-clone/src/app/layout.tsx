import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { ThemeProvider } from "@/lib/ThemeContext";

export const metadata: Metadata = {
  title: "AI Automation Company | Custom Workflows & Software",
  description:
    "NexaFlow AI builds custom AI automation, software & workflows that eliminate manual work for businesses. Book a free audit today.",
  icons: { icon: "/favicon.svg" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexaFlow AI",
  url: "https://website-sujal.vercel.app",
  logo: "https://website-sujal.vercel.app/logo-bigger.png",
  email: "hello@nexaflow.ai",
  telephone: "+1-415-555-0132",
  address: {
    "@type": "PostalAddress",
    streetAddress: "600 Congress Ave, STE #1400",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78701",
    addressCountry: "US",
  },
  sameAs: [],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <body className="font-body min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ThemeProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
