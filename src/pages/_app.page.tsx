import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  return (
      <>
        <div id="root">
          <Component {...pageProps} />
        </div>
        <div className="landscape-block">
          Esta página não está disponível no modo paisagem. Por favor, vire seu dispositivo.
        </div>
      </>
  );
}
