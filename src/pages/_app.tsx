import { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import "../styles/global-styles";
import { GlobalStyles } from "../styles/global-styles";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
      <GlobalStyles />
    </ThemeProvider>
  );
}
export default MyApp;
