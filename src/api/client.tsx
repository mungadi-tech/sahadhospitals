import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const link = createHttpLink({
  uri: "http://localhost:8000/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
