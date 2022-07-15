import { books, author } from "../data/static.js";
export const resolvers = {
  Query: {
    books: () => books,
    authors: () => author,
  },
};
