import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UiProviders } from '@/Providers/UiProvider';
import Header from '../components/Header';
import { TonUIProvider } from '@/Providers/TonUIProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hype Coin",
  description: "Hype Coin",
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
          <div className="max-w-[1280px] m-auto">
            <Header />
            {children}
          </div>
        </UiProviders>
      </TonUIProvider>
      </body>
    </html>
  );
}
