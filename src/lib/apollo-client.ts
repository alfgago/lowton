import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const client = new ApolloClient({
  uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clulsp0ub07ra07wgarbgcapx/master",
  cache: new InMemoryCache(),
});

export default client;