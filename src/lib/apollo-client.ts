import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.WORDPRESS_URL || "http://localhost/bildkulturen/graphql",
    // uri: process.env.WORDPRESS_URL,
  }),
  cache: new InMemoryCache(),
});

export default client;
