import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: "Codenation Academy — Modern IT Education Ecosystem",
  description: "Codenation Academy brings world-class software engineering education in partnership with local educational centers using a hybrid model.",
  openGraph: {
    title: "Codenation Academy — Modern IT Education Ecosystem",
    description: "Codenation Academy brings world-class software engineering education in partnership with local educational centers using a hybrid model.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Codenation Academy — Modern IT Education Ecosystem",
    description: "Codenation Academy brings world-class software engineering education in partnership with local educational centers using a hybrid model.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-[#3B40F8] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
