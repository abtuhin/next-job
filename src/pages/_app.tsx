import { ThemeProvider } from "styled-components";
import { theme } from "@/config/styles";
import { AppProps } from "next/app";
import GlobalStyle from "@/styled/GlobalStyle";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}