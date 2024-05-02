import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UiProviders } from '@/Providers/UiProvider';
import Header from '../components/Header';
import { TonUIProvider } from '@/Providers/TonUIProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ton Pump Fun",
  description: "Ton Pump Fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TonUIProvider>
        <UiProviders>
          <Header />
          <div className="px-8">
            {children}
          </div>
        </UiProviders>
      </TonUIProvider>
      </body>
    </html>
  );
}
