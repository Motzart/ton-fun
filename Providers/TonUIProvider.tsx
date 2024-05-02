'use client';

import { TonConnectUIProvider } from '@tonconnect/ui-react';

export function TonUIProvider({children}: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl="http://localhost:3000/tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
  )
}
