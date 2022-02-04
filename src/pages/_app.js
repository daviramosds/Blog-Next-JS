import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

import AppWrapper from '../Store'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
