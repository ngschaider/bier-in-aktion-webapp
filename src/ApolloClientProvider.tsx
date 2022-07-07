import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { onError } from '@apollo/client/link/error';

import App from "./components/App";
import './components/App.css';

const httpLink = createHttpLink({
    uri: 'http://212.95.26.166:5000'
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
  
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
    link: errorLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function ApolloClientProvider() {
    return (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    )
}

export default ApolloClientProvider;