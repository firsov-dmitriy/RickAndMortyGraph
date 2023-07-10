import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Router from '../Router';

import { muiTheme } from '@/utils';

const apolloClient = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <Helmet
            defaultTitle={'Rick and Morty Graphql'}
            titleTemplate={`%s - ${'Rick and Morty Graphql'}`}
          >
            <meta content='' name='description' />
            <meta content='' name='keywords' />
          </Helmet>
          <CssBaseline />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
