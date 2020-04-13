import { ApolloServer } from "apollo-server";
import { apolloConfig } from "./config";

const server = new ApolloServer(apolloConfig);

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
