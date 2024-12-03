import { ViewProvider } from "@/providers/ViewProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ViewProvider>
      <Component {...pageProps} />
    </ViewProvider>
  );
}
