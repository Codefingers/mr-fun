import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Nav } from '../components/Nav';
import { useApollo } from '../lib/apolloClient';
import { theme } from '../theme'

// const theme = {
//   colors: {
//     body: '#838fa6',
//     heading: '#ebedf2',
//     accent: '#BA99FF',
//     button: '#FFF',
//   },
// };

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Satoshi', sans-serif;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding-bottom: 48px;
    background: #151b26;
    color: ${({ theme }) => theme.colors.body};
  }

  button {
    margin-top: 16px;
    border-radius: 50px;
    appearance: none;
    font-size: 16px;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.button};
    border: 0;
    padding: 12px 24px;
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.heading};
  }

  h1 {
    font-size: 40px;
    font-weight: 500;
    margin-top: 0;
  }

  h2 {
    font-size: 26px;
    font-weight: 380;
  }

  h3 {
    font-size: 16px;
    font-weidht: 380;
  }

  p {
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.body};
    text-decoration: none;
  }

  a:hover {
    color: #c5ccd9;
  }
`;

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <link
          href="https://api.fontshare.com/css?f[]=satoshi@1&display=swap"
          rel="stylesheet"
        />
        <GlobalStyle />
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </ApolloProvider>
    </ThemeProvider>
  );
}
