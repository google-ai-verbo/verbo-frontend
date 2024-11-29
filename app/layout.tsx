// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css'; // Import your global styles if any

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
