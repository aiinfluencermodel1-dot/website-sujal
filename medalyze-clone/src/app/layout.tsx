import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { ThemeProvider } from "@/lib/ThemeContext";

export const metadata: Metadata = {
  title: "NexaFlow AI - AI Chatbots, Voice Agents & Workflow Automation",
  description:
    "We design and deploy AI chatbots, voice agents, and workflow automations that capture leads, close sales, and eliminate busywork.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <body className="font-body min-h-screen flex flex-col">
        <ThemeProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
