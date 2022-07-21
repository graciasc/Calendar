import "../styles/globals.css";
import type { AppProps } from "next/app";

// function MyApp({ Component, pageProps }: AppProps) {
function MyApp({ Component }: AppProps) {
  // return <Component {...pageProps} />
  return <Component />;
}

export default MyApp;
