import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styled/GlobalStyle";
import { theme } from "@/config/styles";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}