import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema/schema.js";
import { resolvers } from "./resolver/resolver.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

server.start().then((res) => {
  server.applyMiddleware({ app });

  app.listen({ port: 3000 }, () => {
    console.log(
      `Server ready port 3000 http://localhost:3000${server.graphqlPath}`
    );
  });
});
