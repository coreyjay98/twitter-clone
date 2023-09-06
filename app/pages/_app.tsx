import "@/styles/globals.css";
import RootLayout from "../layout";
import React from "react";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default App;
