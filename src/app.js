import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema/schema.js";
import { resolvers } from "./resolver/resolver.js";
import mongoose from "mongoose";

//connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://linhnguyen:1234@graphql.tve2jjk.mongodb.net/?retryWrites=true&w=majority",
      {
        // useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

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
connectDB();