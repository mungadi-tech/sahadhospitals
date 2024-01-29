import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const link = createHttpLink({
  uri: "http://localhost:8000/api/",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("auth_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    },
  };
});
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});
