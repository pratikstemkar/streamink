import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/theme-provider";
import AuthProvider from "@/components/context/AuthProvider";
import { ReduxProvider } from "@/redux/providers/ReduxProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    default: `${process.env.NEXT_PUBLIC_APP_NAME} - Where Stories Flow`,
  },
  description: "Stream shows, movies and much more. Subscribe Now!",
  generator: `${process.env.NEXT_PUBLIC_APP_NAME}`,
  applicationName: `${process.env.NEXT_PUBLIC_APP_NAME}`,
  referrer: "origin-when-cross-origin",
  keywords: [`${process.env.NEXT_PUBLIC_APP_NAME}`, "Streaming", "Anime"],
  authors: [{ name: "Pratik", url: "https://pratikstemkar.in" }],
  colorScheme: "dark",
  creator: "Pratik Temkar",
  publisher: "Pratik Temkar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <AuthProvider>
              <div className="min-h-screen flex flex-col justify-between">
                <Navbar />
                {children}
                <Footer />
              </div>
              <Toaster />
            </AuthProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
