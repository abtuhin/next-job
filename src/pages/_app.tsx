import { ThemeProvider } from "styled-components";
import { theme } from "@/config/styles";
import { AppProps } from "next/app";
import GlobalStyle from "@/styled/GlobalStyle";

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