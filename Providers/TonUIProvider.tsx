'use client';

import { TonConnectUIProvider } from '@tonconnect/ui-react';

export function TonUIProvider({children}: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl="https://ton-fun-inky.vercel.app/tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
  )
}
