import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JetBrains_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import { ThemeProvider } from '../context/ThemeContext';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className={`min-h-screen bg-white dark:bg-black text-black dark:text-white ${jetBrainsMono.className}`}>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
