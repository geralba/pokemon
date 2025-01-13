'use client';
import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/state/store';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
