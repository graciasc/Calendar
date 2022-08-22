import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

// function MyApp({ Component, pageProps }: AppProps) {
function MyApp({ Component }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <Component />
    </ThemeProvider>
  );
}

export default MyApp;
